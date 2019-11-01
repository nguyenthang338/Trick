file='cheat-sheet'
dir='/root/Trick/nodejs-example/nodejs-mongodb-driver-api/'

a=$(find $dir -maxdepth 1 -type f -name "*.js"| cut -d '/' -f 6)

for folder in $a
do
   echo $folder >> $file
   echo "" >> $file
   cat $folder >> $file
   echo "" >> $file
done
