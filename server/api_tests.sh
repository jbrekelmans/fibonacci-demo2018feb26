#!/bin/sh
set -x
request () {
  STATUS_CODE=$(curl --silent --output output.txt -w '%{http_code}' http://fibonacci-server:8080/?n="$$2")
  if [ "$$STATUS_CODE" -ne "$$1" ]; then 
    cat output.txt
    exit 1
  fi
  OUTPUT=$$(cat output.txt)
}
request 400 not_a_number
request 200 0 && [ "$$OUTPUT" = 'The 0th Fibonacci number is 0!' ] || exit
request 200 1 && [ "$$OUTPUT" = 'The 1st Fibonacci number is 1!' ] || exit
request 200 2 && [ "$$OUTPUT" = 'The 2nd Fibonacci number is 1!' ] || exit
request 200 3 && [ "$$OUTPUT" = 'The 3rd Fibonacci number is 2!' ] || exit
