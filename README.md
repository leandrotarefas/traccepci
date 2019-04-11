# traccepci

Traccelog with masking card number function

## Code

const TraccePCI = require("traccepci")

//params

//path: required

//saveCopyAtLocal: save copy of log at HOME app (./log)

const traccePCI = new TraccePCI("/data/log/", true);

const id = "123456"

let content = {nome:"melo",cartao:"12345678987654321",credit_card:"12345678987654321"}

let keysForMak = ["cartao", "card", "credit_card"]

traccePCI.logInfoRequest(id, content ,keysForMak);

traccePCI.logInfoResponse(id, content ,keysForMak);

traccePCI.logInfoWrite(id, content ,keysForMak);

traccePCI.logInfoError(id, content ,keysForMak);


## Output

2019-04-11T18:48:20.697Z - info:  id=123456, type=Request, Date=2019-04-11T18:48:20.694Z, 
body={"nome":"melo","cartao":"1234 ********* 54321","credit_card":"1234 ********* 54321"}

2019-04-11T18:48:20.701Z - info:  id=123456, type=Response, Date=2019-04-11T18:48:20.694Z, 
body={"nome":"melo","cartao":"1234 ********* 54321","credit_card":"1234 ********* 54321"}

2019-04-11T18:48:20.702Z - error:  id=123456, type=Error, Date=2019-04-11T18:48:20.694Z, 
message={"nome":"melo","cartao":"1234 ********* 54321","credit_card":"1234 ********* 54321"}

2019-04-11T18:48:20.702Z - info:  id=123456, type=Info, Date=2019-04-11T18:48:20.694Z, 
message={"nome":"melo","cartao":"1234 ********* 54321","credit_card":"1234 ********* 54321"}

