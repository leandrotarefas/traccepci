const log = require("./config")("C:/Users/tarefas-dell/development/nodejs/teste/");

const id = "123456"

let content = {nome:"melo",cartao:"12345678987654321",credit_card:"12345678987654321"}

log.logInfoRequest(id, content ,["cartao", "card", "credit_card"]);

log.logInfoResponse(id, content ,["cartao", "card", "credit_card"]);

log.logInfoWrite(id, content ,["cartao", "card", "credit_card"]);

log.logInfoError(id, content ,["cartao", "card", "credit_card"]);