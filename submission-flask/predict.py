import numpy as np
from scipy.stats import norm
import keras

model = keras.models.load_model('saved_model')

def calc_approx_score(values):
    return values[0]*0.35 + values[1]*0.30 + values[2]*0.15 + values[3]*0.10 + values[4]*0.10

def model_predict(sample):
    sample = np.array(sample).reshape(1,5)

    approx_score = calc_approx_score(list(sample.reshape(5)))
    prediction   = model.predict(sample).squeeze()
    # print('Approx:', approx_score, ', Predict:', prediction)

    result = norm.cdf((prediction - 50) / 100)
    # print('Result:', result)

    return result
