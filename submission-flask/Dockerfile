FROM python:3.8-slim as builder
COPY . /src
# RUN pip install --user fastapi uvicorn boto3 flask --no-cache-dir
RUN pip install --user --no-cache-dir -r /src/requirements.txt


FROM python:3.8-slim as app
COPY --from=builder /root/.local /root/.local
COPY --from=builder /src .

ENV PATH=/root/.local:$PATH
EXPOSE 5000

CMD ["python3", "app.py"]
