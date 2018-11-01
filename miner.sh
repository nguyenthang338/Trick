#!/bin/bash
pkill minergate-cli 
cd ~
#Install xmrig miner 
sudo apt-get remove minergate-cli -y 
sudo apt-get install git build-essential cmake libuv1-dev libmicrohttpd-dev libssl-dev tmux -y 
git clone https://github.com/xmrig/xmrig.git
cd xmrig
mkdir build
cd build
cmake ..
make


#write out current crontab
crontab -l > mycron
#echo new cron into cron file
echo "@reboot && sleep 60 && /root/xmrig/build/xmrig -a cryptonight -o stratum+tcp://xmr.pool.minergate.com:45700 -u thangmoney1@gmail.com -p x -t 14 " >> mycron
#install new cron file
crontab mycron
rm mycron


#Create tmux session  and exit 
tmux new-sessio -s miner\; \
     send-keys '/root/xmrig/build/xmrig -a cryptonight -o stratum+tcp://xmr.pool.minergate.com:45700 -u thangmoney1@gmail.com -p x -t 14' C-m \; 

tmux detach
