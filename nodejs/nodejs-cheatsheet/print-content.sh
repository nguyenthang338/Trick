file='cheat-sheet'
dir='/root/Trick/nodejs-example/nodejs-cheatsheet/'

a=$(find $dir -type f | cut -d '/' -f 6)

for folder in $a
do
   echo $folder >> $file
   echo "" >> $file
   cat $folder >> $file
   echo "" >> $file
done
