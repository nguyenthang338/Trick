#!/bin/bash

URL=http://localhost:3000/signup

X=POST                                                 # //--request -// this is post , put , get, delete method
d="email=nguyenthang33894@gmail.com&psw=thang123"      #//--data Sends the specified data - ... -d@rquest.json
H=""                                                   # //Content-Type: application/json "
H1=""
H2=""
u="nvthang:thang123"                    # username:pass ...

number=2;
#curl -X POST -d "userId=5&title=Stuff and Things&body=An" https://jsonplaceholder.typicode.com/posts
case $number in

  1)
    #// Curl with -i header request
    curl -i $URL
    ;;

  2)
    #// post with custem new resource
    curl -X $X -d $d $URL
    ;;

  3)
    #//Post request json
    curl -X $X -H $H -d $d $URL
    ;;

  4)
    #// Delete remove resource
    curl -X $X  $URL
    ;;

  5)
    #//Authentication
    curl -u $U $URL
    ;;

  *)
    echo -n "unknown"
    ;;
esac
