chmod +x install.sh
sudo ./install.sh
chmod +x server_run.sh
./server_run.sh &
chmod +x sleep.sh
./sleep.sh
curl -X GET "http://localhost:8081/memes/" -H  "accept: */*"
curl -X POST "http://localhost:8081/memes/" -H  "accept: */*" -H  "Content-Type: application/json" -d "{\"name\":\"Anikash\",\"caption\":\"The funniest meme\",\"url\":\"https://thepsychologist.bps.org.uk/sites/thepsychologist.bps.org.uk/files/img_9685.jpg\"}"
curl -X GET "http://localhost:8081/memes/" -H  "accept: */*"
curl -X GET "http://localhost:8081/swagger-ui/" -H  "accept: */*"
