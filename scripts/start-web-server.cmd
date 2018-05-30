@echo off
echo "For this to work you need to npm install -g serve"
echo "Open your browser to http://localhost:8080"
start http://localhost:8080
serve -l 8080 .
