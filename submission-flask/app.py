# app.py

import os
import boto3
from boto3.dynamodb.conditions import Key
from flask import Flask, jsonify, request, redirect, url_for
from flask_cors import CORS
from flask_awscognito import AWSCognitoAuthentication
import math
import numpy as np
from predict import model_predict
from yahoo_fin.stock_info import get_data, get_balance_sheet, get_analysts_info, get_company_info, get_quote_table
import pandas as pd
import datetime
import requests

app = Flask(__name__)
CORS(app)



client = boto3.client('dynamodb', region_name='ap-southeast-1')
dynamoTableName = 'user'

aws_auth = AWSCognitoAuthentication(app)

def sigmoid(x):
    return 1 / (1 + math.exp(-x))

@app.route('/credit', methods=['GET', 'POST'])
def credit():
    if request.method == "POST":
        json = request.json
        payment_history = json['payment_history']
        credit_owed = json['credit_owed']
        credit_history_length = json['credit_history_length']
        new_credit = 50
        credit_mix = 50
        percentile = round(model_predict([payment_history, credit_owed, credit_history_length, new_credit, credit_mix]) * 100)
        return jsonify({'credit_percentile': percentile})
    payment_history = 74
    credit_owed = 70
    credit_history_length = 50
    new_credit = 68
    credit_mix = 75
    percentile = round(model_predict([payment_history, credit_owed, credit_history_length, new_credit, credit_mix]) * 100)
    return jsonify({'credit_percentile': percentile, 'payment_history': payment_history, 'credit_owed': credit_owed, 
    'credit_history_length': credit_history_length, 'new_credit': new_credit, 'credit_mix': credit_mix})

def timestamp(date_string):
    #date_string = date_string.split()[0].split('-')
    
    #date = datetime.datetime(date_string)
    timestamp = round(datetime.datetime.timestamp(date_string))
    print(timestamp)
    return timestamp

@app.route('/stock', methods=['GET', 'POST'])
def stock():
    if request.method == 'POST':
        json = request.json
        tikr = json['ticker']
        start = json['start']
        end = json['end']
        df= get_data(tikr, start_date=start, end_date=end, index_as_date = False, interval="1d")
        cols = df.columns.tolist()
        cols = cols[0:1] + cols[2:3] + cols[1:2] + cols[3:4] + cols[4:5] + cols[6:7]
        df['date'] = df['date'].apply(timestamp)
        df= df[cols]
        
        df = df.values.tolist()
        for item in df:
            item[0] = int(item[0])
        quote = get_quote_table(tikr)
        keys_to_remove = ['Ex-Dividend Date', 'Open', '52 Week Range', 'Ask', 'Avg. Volume', "Day's Range", "Earnings Date",
                        "Forward Dividend & Yield", "Previous Close", 'Quote Price', "Volume", 'Bid', 'Beta (5Y Monthly)']
        for key in keys_to_remove:
            quote.pop(key)
        none_val = []
        for key in quote:
            if quote[key] == None:
                none_val.append(key)
        for key in none_val:
            quote.pop(key)
        
        quote['pricing'] = df
        return quote
    
@app.route('/news', methods=['GET'])
def news():
    api_key = '5798eb98-5a33-44ab-99e3-f89632db9204'
    search_term = "Start Investing"
    search_url = f"https://content.guardianapis.com/search?order-by=relevance&q={search_term}&api-key={api_key}&page-size=5"
    response = requests.get(search_url)
    alist = response.json()['response']['results']
    ret = []
    for item in alist:
        temp = []
        temp.append(item['webTitle'])
        temp.append(item['webUrl'])
        ret.append(temp)
    return jsonify(ret)
            


@app.route('/')
#@aws_auth.authentication_required
def index():
    """if app.config['ACCESS_TOKEN'] != '':
        print("Do forced logout")
        app.config['ACCESS_TOKEN'] = ''
        return redirect('https://dayzero.auth.ap-southeast-1.amazoncognito.com/logout?client_id=3j5c5nmh38da3pkkdl27ina58u&logout_uri=https://etsh-alb-flask-1876474072.ap-southeast-1.elb.amazonaws.com/')"""
    
    return jsonify({'page': 'This is the landing page'})

@app.route('/login')
def login():
    return redirect(aws_auth.get_sign_in_url())
    #return jsonify({'page': 'This is the login page, should redirect to Cognito'})

@app.route('/logout')
def logout():
    app.config['ACCESS_TOKEN'] = ''
    return redirect('https://dayzero.auth.ap-southeast-1.amazoncognito.com/logout?'+
    'client_id='+app.config['AWS_COGNITO_USER_POOL_CLIENT_ID']+
    'logout_uri=https://etsh-alb-flask-1876474072.ap-southeast-1.elb.amazonaws.com/')
    #return redirect(url_for('index'))


@app.route('/aws_cognito_redirect')
def aws_cognito_redirect():
    access_token = aws_auth.get_access_token(request.args)
    app.config['ACCESS_TOKEN'] = access_token
    response = redirect(url_for('index'))
    returner = 'Basic ' + access_token
    response.headers['Authorization'] = returner
    #return jsonify({'access_token': access_token})
    return response


@app.route('/update', methods=['GET','POST'])
def update_item():
    if request.method=='POST':
        #email = str(request.form.get('email'))
        fullname = str(request.form.get('fullname'))
        age = str(request.form.get('age'))
        marital_status = str(request.form.get('marital_status'))
        children = str(request.form.get('children'))
        wards = str(request.form.get('wards'))
        employment_status = str(request.form.get('employment_status'))
        medical_history_self = str(request.form.get('medical_history_self'))
        medical_history_family = str(request.form.get('medical_history_family'))
        retirement_age_target = str(request.form.get('retirement_age_target'))
        investment_familiarity = str(request.form.get('investment_familiarity'))
        time_horizon = str(request.form.get('time_horizon'))
        investment_concerns_gain_loss = str(request.form.get('investment_concerns_gain_loss'))
        fall1 = str(request.form.get('fall1'))
        fall2 = str(request.form.get('fall2'))
        preferred_portfolio = str(request.form.get('preferred_portfolio'))
        
        resp = client.update_item(
            TableName='user',
            Key= {
                'username': {'S':fullname}
            },
            UpdateExpression = 
                """set fullname=:f, age=:a, marital_status=:m, children=:c,
                wards=:w, employment_status=:emp, medical_history_self=:medself, medical_history_family=:medfam,
                retirement_age_target=:r, investment_familiarity=:i, time_horizon=:t, investment_concerns_gain_loss=:icgl,
                fall1=:fone, fall2=:ftwo, preferred_portfolio=:pp""",
            ExpressionAttributeValues={
                ':f': {'S':fullname},
                ':a': {'N': age},
                ':m': {'S': marital_status},
                ':c': {'N': children},
                ':w': {'N': wards},
                ':emp': {'S': employment_status},
                ':medself': {'S': medical_history_self},
                ':medfam': {'S': medical_history_family},
                ':r': {'N': retirement_age_target},
                ':i': {'S': investment_familiarity},
                ':t': {'S': time_horizon},
                ':icgl': {'S': investment_concerns_gain_loss},
                ':fone': {'S': fall1},
                ':ftwo': {'S': fall2},
                ':pp': {'S': preferred_portfolio}
            }
        )
        return resp

if __name__ == '__main__':
    app.run(threaded=True, host='0.0.0.0', port=5000)

