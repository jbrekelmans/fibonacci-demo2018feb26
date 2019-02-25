#!/bin/sh
set -x
test () {
  STATUS_CODE=$(curl --silent --output output.txt -w '%{http_code}' http://fibonacci-server:$PORT/?n="$2")
  if [ "$STATUS_CODE" -ne "$1" ]; then 
    cat output.txt
    return 1
  fi
  OUTPUT=$(cat output.txt)
}
test 400 not_a_number
test 200 0 && [ "$OUTPUT" = 'The 0th Fibonacci number is 0!' ] || exit
test 200 1 && [ "$OUTPUT" = 'The 1st Fibonacci number is 1!' ] || exit
test 200 2 && [ "$OUTPUT" = 'The 2nd Fibonacci number is 1!' ] || exit
test 200 3 && [ "$OUTPUT" = 'The 3rd Fibonacci number is 2!' ] || exit
