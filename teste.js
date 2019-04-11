const TraccePCI = require("./app")


//params : 
    //path: required
    //saveCopyAtLocal: save copy of log at HOME app (./log)
const traccePCI = new TraccePCI("C:/Users/tarefas-dell/development/nodejs/teste/", true);

const id = "123456"

let content = {nome:"melo",cartao:"12345678987654321",credit_card:"12345678987654321"}

let keysForMak = ["cartao", "card", "credit_card"]

traccePCI.logInfoRequest(id, content ,keysForMak);

traccePCI.logInfoResponse(id, content ,keysForMak);

traccePCI.logInfoWrite(id, content ,keysForMak);

traccePCI.logInfoError(id, content ,keysForMak);