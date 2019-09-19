var request = require('request')
let options = {
  url: 'https://www.999dice.com/api/web.aspx',
  form: {
    a: 'CreateAccount',
    key: '5ef4b403e90b43c7963555bdeb4029f8'
  }
};

var nvthang = function CreateAccount (callback){
  var req = request.post(options, (err, res, body) => {
    var info = JSON.parse(body);
    /*
    while(true){
      console.log('A') ;
    }
    */
    callback(info);
  });
}
nvthang((data) => {
  console.log(data);
});


///*
//Starting a session...
//  CreateAccount
//Creates a new account for the user.
//  Request:
//a: CreateAccount
//Key: Your API Key
//Response:
//AccountCookie: A value that can be used with BeginSession to access this account in the future.
//  SessionCookie: The value you must pass to future requests for this user during this session.
//  AccountId: The user's account ID.
//  MaxBetBatchSize: The maximum number of bets that can be placed in a single automated batch.
//  ClientSeed: The user's seed number for betting.
//  DepositAddress: A bitcoin address where the user can deposit funds to their account.
//  Errors:
//InvalidApiKey: 1 (The API key you provided is invalid)
//BeginSession
//Begins a session for a user with an existing account.
//  Request:
//a: BeginSession
//Key: Your API Key
//AccountCookie: The cookie for the user's account you wish to access (from CreateAccount).
//  Response:
//AccountCookie: A value that can be used with BeginSession to access this account in the future.
//  SessionCookie: The value you must pass to future requests for this user during this session.
//  AccountId: The user's account ID.
//  ReferredById: The user's referrer, or 0 if none.
//  MaxBetBatchSize: The maximum number of bets that can be placed in a single automated batch.
//  ClientSeed: The user's seed number for betting.
//  Email: The user's email address.
//  EmergencyAddress: The user's emergency withdrawal bitcoin address.
//  DepositAddress: A bitcoin address where the user can deposit funds to their account.
//  Balance: The user's balance.
//  BetCount: The total number of bets the user has made.
//  BetWinCount: The total number of winning bets the user has made.
//  BetPayIn: The total amount the user has bet (negative).
//  BetPayOut: The total amount the user has been paid from bets.
//  Doge [DepositAddress, Balance, BetCount, BetWinCount, BetPayIn, BetPayOut]: As above, but for Dogecoin.
//  LTC [DepositAddress, Balance, BetCount, BetWinCount, BetPayIn, BetPayOut]: As above, but for Litecoin.
//  ETH [DepositAddress, Balance, BetCount, BetWinCount, BetPayIn, BetPayOut]: As above, but for Ethereum.
//  Errors:
//InvalidApiKey: 1 (The API key you provided is invalid)
//LoginRequired: 1 (The account is protected by a username and password. Use Login instead)
//Login
//Begins a session for a user with an existing account protected by a username and password.
//  Request:
//a: Login
//Key: Your API Key
//Username: The user's username.
//  Password: The user's password.
//  Totp (optional): The user's totp code (ie Google Authenticator)
//Response:
//AccountCookie: A value that can be used with BeginSession to access this account in the future.
//  SessionCookie: The value you must pass to future requests for this user during this session.
//  AccountId: The user's account ID.
//  ReferredById: The user's referrer, or 0 if none.
//  MaxBetBatchSize: The maximum number of bets that can be placed in a single automated batch.
//  ClientSeed: The user's seed number for betting.
//  DepositAddress: A bitcoin address where the user can deposit funds to their account.
//  Balance: The user's balance.
//  Email: The user's email address.
//  EmergencyAddress: The user's emergency withdrawal bitcoin address.
//  BetCount: The total number of bets the user has made.
//  BetWinCount: The total number of winning bets the user has made.
//  BetPayIn: The total amount the user has bet (negative).
//  BetPayOut: The total amount the user has been paid from bets.
//  Errors:
//InvalidApiKey: 1 (The API key you provided is invalid)
//LoginInvalid: 1 (The username was not found or the password or totp is wrong)
//Handling user information...
//  CreateUser
//Creates a username and password.
//  Request:
//a: CreateUser
//s: User's session cookie
//Username: The user's username.
//  Password: The user's password.
//  Response:
//success: 1 (The username and password have been created)
//Errors:
//AccountHasUser: 1 (This account already has a username and password)
//UsernameTaken: 1 (The username is already taken by someone else)
//ChangePassword
//Change the user's password.
//  Request:
//a: ChangePassword
//s: User's session cookie
//OldPassword: The user's current password
//NewPassword: The new password.
//  Response:
//success: 1 (The password is changed)
//Errors:
//WrongPassword: 1 (The wrong password was supplied)
//UpdateEmail
//Update the user's email address.
//  Request:
//a: UpdateEmail
//s: User's session cookie
//Email: The user's email address
//Response:
//success: 1 (The email is updated)
//UpdateEmergencyAddress
//Update the user's emergency withdrawal bitcoin address.
//  Request:
//a: UpdateEmergencyAddress
//s: User's session cookie
//Address: The user's emergency withdrawal bitcoin address
//Response:
//success: 1 (The address is updated)
//Funds...
//
//  Withdraw
//
//Withdraw funds.
//  Request:
//a: Withdraw
//s: User's session cookie
//Amount: The number of satoshis to withdraw, or 0 to withdraw all (100,000,000 satoshis per BTC). Bitcoin's 0.00025 BTC transaction fee will be deducted.
//  Address: The bitcoin address or account ID to receive the withdrawal.
//  Totp (optional): The user's totp code (ie Google Authenticator)
//Currency: btc/doge/ltc/eth
//Response:
//Pending: The number of satoshis queued for withdrawal.
//  Errors:
//TooSmall: 1 (The withdrawal is too small to process)
//InsufficientFunds: 1 (The user has insufficient funds)
//GetDepositAddress
//Get a bitcoin address where the user can deposit funds.
//  Request:
//a: GetDepositAddress
//s: User's session cookie
//Currency: btc/doge/ltc/eth
//Response:
//Address: A bitcoin address.
//  GetBalance
//Get the user's current balance. This is only required if the user makes a deposit. If you are polling this value, once per 60 seconds is recommended, and should not be more frequently than once per 15 seconds. Ideally, this should be manually checked by the user clicking a button (they know when they've deposited!).
//  Request:
//a: GetBalance
//s: User's session cookie
//Currency: btc/doge/ltc/eth
//Referrals: 1 (if you also want referral stats)
//Stats: 1 (if you also want your stats and referral stats)
//Response:
//Balance: The user's current balance in satoshis.
//  ReferredBetsCount [if requested]: Total count of bets by referrals
//ReferredBets [if requested]: Total value of bets by referrals, in satoshis
//TotalPayIn [if requested]: Total amount risked, in satoshis
//TotalPayOut [if requested]: Total amount paid out, in satoshis
//TotalBets [if requested]: Total number of bets
//TotalWins [if requested]: Total bets won
//GetBalances [new, untested, may change]
//Get the user's current balances. This is only required if the user makes a deposit. If you are polling this value, once per 60 seconds is recommended, and should not be more frequently than once per 15 seconds. Ideally, this should be manually checked by the user clicking a button (they know when they've deposited!).
//  Request:
//a: GetBalances
//s: User's session cookie
//Response:
//Balances: An array of 0 or more balance records each containing
//Currency: btc/doge/ltc/eth
//Balance: The user's current balance in satoshis
//ReferredBetsCount: Total count of bets by referrals
//ReferredBets: Total value of bets by referrals, in satoshis
//TotalPayIn: Total amount risked, in satoshis
//TotalPayOut: Total amount paid out, in satoshis
//TotalBets: Total number of bets
//TotalWins: Total bets won
//GetDeposits [new, untested, may change]
//Gets a list of deposits or incoming transfers
//Request:
//a: GetDeposits
//s: User's session cookie
//Token (optional): A paging token returned from a previous call to GetDeposits. Only results after the token was generated will be returned.
//  Response:
//Token: A token string to use on the next call to GetDeposits
//Deposits: An array of 0 or more records each containing
//Currency: btc/doge/ltc/eth
//Date: The date the deposit was credited
//Address: The deposit address
//TransactionHash: The transaction hash of the deposit
//Value: Total amount deposited, in satoshis
//Transfers: An array of 0 or more records each containing
//Currency: btc/doge/ltc/eth
//Date: The date the deposit was credited
//Value: Total amount deposited, in satoshis
//AccountId: The account which sent the transfer
//GetWithdrawals [new, untested, may change]
//Gets a list of withdrawals or outgoing transfers
//Request:
//a: GetWithdrawals
//s: User's session cookie
//Token (optional): A paging token returned from a previous call to GetWithdrawals. Only results after the token was generated will be returned. When a pending withdrawal is completed, it is not considered a new result. If you need to monitor withdrawals for completion, do not update your token until it's complete.
//  Response:
//Token: A token string to use on the next call to GetWithdrawals
//Withdrawals: An array of 0 or more records each containing
//Currency: btc/doge/ltc/eth
//Address: The withdrawal address
//Value: Total amount which will be received, in satoshis
//Fee: Total fee, in satoshis
//Requested: The date the withdrawal was requested
//Completed: The date the withdrawal was completed (or null)
//TransactionHash: The transaction hash of the withdrawal (or null)
//Transfers: An array of 0 or more records each containing
//Currency: btc/doge/ltc/eth
//Value: Total amount transferred, in satoshis
//AccountId: The account receiving the transfer
//Requested: The date the transfer was requested
//Completed: The date the transfer was completed (or null)
//Betting...
//  GetServerSeedHash
//Get the server seed's hash for the next bet.
//  Request:
//a: GetServerSeedHash
//s: User's session cookie
//Response:
//Hash: The server seed's hash
//SetClientSeed
//The client seed is now sent along with every call to PlaceBet or PlaceAutomatedBets.
//  Set the client's seed number.
//  Request:
//a: SetClientSeed
//s: User's session cookie
//Seed: The user's new seed number (64 bit signed integer)
//Response:
//success: 1 (The seed is changed)
//PlaceBet
//Place a bet
//Request:
//a: PlaceBet
//s: User's session cookie
//PayIn: The bet amount, in satoshis
//Low: The low number in the user's guess range. The guess range must be between 0-999,999.
//  High: The high number in the user's guess range. The guess range must be between 0-999,999.
//  ClientSeed: The seed to use for this bet (32 bit signed integer)
//Currency: btc/doge/ltc/eth
//ProtocolVersion: 2 [All bot owners should update their code to set this value to opt in to the new response format]
//Response:
//BetId: The bet's ID.
//  PayOut: The payout from the bet (subtract PayIn to calculate profit)
//Secret: The secret number from the bet.
//  StartingBalance: Your balance just before placing the bet, in satoshis.
//  ServerSeed: The server seed used to generate the bet.
//  Next: The next server seed hash (If all 0's, check the Warning field)
//Errors:
//ChanceTooHigh: 1 (The chance to win is too high. It must be between 5% and 95%)
//ChanceTooLow: 1 (The chance to win is too low. It must be between 5% and 95%)
//InsufficientFunds: 1 (The user has insufficient funds to make this bet)
//NoPossibleProfit: 1 (There is no possible way for the user to profit from this bet)
  //MaxPayoutExceeded: 1 (The bet, if won, would exceed the maximum possible payout for the casino)
//
//PlaceAutomatedBets
//Place a batch of automated bets
//Request:
//a: PlaceAutomatedBets
//s: User's session cookie
//BasePayIn: The base bet amount, in satoshis
//Low: The low number in the user's guess range. The guess range must be between 0-999,999.
//  High: The high number in the user's guess range. The guess range must be between 0-999,999.
//  MaxBets: The maximum number of bets to make. Current limit is 200.
//  ResetOnWin (optional): If true, after winning a bet, the next bet amount will be BasePayIn.
//  ResetOnLose (optional): If true, after losing a bet, the next bet amount will be BasePayIn.
//  IncreaseOnWinPercent (optional): If ResetOnWin is false, after winning a bet, increase the next bet by this percent. 0.5 = 50%, 1.0 = 100% (double), 2.0 = 200% (triple). Cannot be negative.
//  IncreaseOnLosePercent (optional): If ResetOnLose is false, after losing a bet, increase the next bet by this percent. 0.5 = 50%, 1.0 = 100% (double), 2.0 = 200% (triple). Cannot be negative.
//  MaxPayIn (optional): The maximum bet amount, or 0 for no maximum.
//  ResetOnLoseMaxBet (optional): If true, then after a losing bet where the bet amount is equal to MaxPayIn, the next bet amount will be BasePayIn.
//  StopOnLoseMaxBet (optional): If true, then after a losing bet where the bet amount is equal to MaxPayIn, betting will end.
//  StopMaxBalance (optional): After a bet, if your balance is at least this amount, then stop betting. 0 for no maximum.
//  StopMinBalance (optional): After a bet, if your balance is less than this amount, then stop betting.
//  StartingPayIn (optional): The first bet's amount, in satoshis (Overrides BasePayIn as the first bet's size)
//Compact (optional): If true, a compact response is sent. This will save bandwidth and yield quicker responses. For example, 200 bets may take 4000 bytes of bandwidth whereas the compact result might be only 100 bytes.
//  ClientSeed: The seed to use for these bets (32 bit signed integer)
//Currency: btc/doge/ltc/eth
//ProtocolVersion: 2 [All bot owners should update their code to set this value to opt in to the new response format]
//Response:
//BetId: The bet ID of the first bet (Each subsequent bet, add 1).
//  PayIns: The amounts of the bets
//PayOuts: The payouts from the bets (subtract PayIns to calculate profit)
//Secrets: The secret numbers from the bets.
//  StartingBalance: Your balance just before beginning the bets, in satoshis.
//  Next: The next server seed hash (If all 0's, check the Warning field)
//Compact Response:
//BetId: The bet ID of the first bet (Each subsequent bet, add 1).
//  BetCount: The total number of bets
//PayIn: The total amount bet
//PayOut: The total amount of all bet payouts (subtract PayIn to calculate profit)
//Seed: The server seed used to calculate the bet results.
//  StartingBalance: Your balance just before beginning the bets, in satoshis.
//  Next: The next server seed hash (If all 0's, check the Warning field)
//Errors:
//ChanceTooHigh: 1 (The chance to win is too high. It must be between 5% and 95%)
//ChanceTooLow: 1 (The chance to win is too low. It must be between 5% and 95%)
//InsufficientFunds: 1 (The user has insufficient funds to make this bet)
//NoPossibleProfit: 1 (There is no possible way for the user to profit from this bet)
//MaxPayoutExceeded: 1 (The bet, if won, would exceed the maximum possible payout for the casino)
//Seed: The server seed used to calculate the bet results.
//  General Information...
//  GetCurrencies
//Gets a list of supported currencies.
//  Request:
//a: GetCurrencies
//Response:
//Currencies: A list of currencies.
//  Samples
//Request: a=UpdateEmergencyAddress&s=1a2b3c4d5e6f&Address=1BitcoinAddress123
//Response: {success: 1}
//
//Request: a=Withdraw&s=1a2b3c4d5e6f&Amount=5000000&Address=1BitcoinAddress123&Currency=btc
//Response: {Pending: 5000000}
//or Response: {InsufficientFunds: 1}
//Request: a=GetBalance&s=1a2b3c4d5e6f
//Response: {Balance: 123450000}
//or Response: {TooFast: 1}
//
//Request: a=PlaceBet&s=1a2b3c4d5e6f&PayIn=1000&Low=0&High=499499&ClientSeed=12345678&Currency=doge
//Response: {BetId:123, PayOut: 2000, Secret: 222222, StartingBalance: 5000, ServerSeed: "a1b2c3d4e5f60708a1b2c3d4e5f60708a1b2c3d4e5f60708a1b2c3d4e5f60708"}
//or Response: {BetId:123, PayOut: 0, Secret: 888888, StartingBalance: 5000, ServerSeed: "a1b2c3d4e5f60708a1b2c3d4e5f60708a1b2c3d4e5f60708a1b2c3d4e5f60708"}
//or Response: {InsufficientFunds: 1}
//or Response: {TooFast: 1}
//
//Request: a=PlaceAutomatedBets&s=1a2b3c4d5e6f&BasePayIn=1000&Low=0&High=499499&MaxBets=3&ResetOnWin=1&ResetOnLose=0&IncreaseOnWinPercent=0&IncreaseOnLosePercent=1.0&MaxPayIn=2500&ResetOnLoseMaxBet=0&StopOnLoseMaxBet=0&StopMaxBalance=0&ClientSeed=987654321&Currency=doge
//Response: {BetId:123, PayIns: [-1000, -2000, -2500], PayOuts: [0, 0, 5000], Secrets: [777777, 888888, 222222], StartingBalance: 5000, Seed: "a1b2c3d4e5f60708a1b2c3d4e5f60708a1b2c3d4e5f60708a1b2c3d4e5f60708"}
//or Response: {BetId:123, PayIns: [-1000, -1000, -1000], PayOuts: [2000, 2000, 0], Secrets: [222222, 333333, 777777], StartingBalance: 5000, Seed: "a1b2c3d4e5f60708a1b2c3d4e5f60708a1b2c3d4e5f60708a1b2c3d4e5f60708"}
//or Response: {InsufficientFunds: 1}
//or Response: {TooFast: 1}
//
//Request: a=PlaceAutomatedBets&s=1a2b3c4d5e6f&BasePayIn=1000&Low=0&High=499499&MaxBets=200&ResetOnWin=1&ResetOnLose=1&IncreaseOnWinPercent=0&IncreaseOnLosePercent=0&MaxPayIn=2500&ResetOnLoseMaxBet=0&StopOnLoseMaxBet=0&StopMaxBalance=0&ClientSeed=987654321&Currency=btc&Compact=1
//Response: {BetId: 123, BetCount: 200, PayIn: -200000, PayOut: 300000, Seed: "a1b2c3d4e5f60708a1b2c3d4e5f60708a1b2c3d4e5f60708a1b2c3d4e5f60708", StartingBalance: 5000}
//or Response: {InsufficientFunds: 1}
//or Response: {TooFast: 1}
//
//  */
