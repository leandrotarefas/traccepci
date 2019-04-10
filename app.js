
const tlog = require("traccelog")
const maskkcard = require("maskkcard")

module.exports = function(path) {

    function logInfoRequest(id, content, keysForMasking) {
        const maskedContent =  maskContent(content, keysForMasking);
        tlog.logPathRequest(path,id, maskedContent);
    }

    function logInfoResponse(id, content, keysForMasking) {
        const maskedContent =  maskContent(content, keysForMasking);
        tlog.logPathResponse(path,id, maskedContent);
    }

    function logInfoWrite(id, content, keysForMasking) {
        const maskedContent =  maskContent(content, keysForMasking);
        tlog.logPathWrite(path,id, maskedContent);
    }

    function logInfoError(id, content, keysForMasking) {
        const maskedContent =  maskContent(content, keysForMasking);
        tlog.logPathError(path,id, maskedContent);
    }

    function maskContent(content, keysForMasking){
        let maskedContent;
        for (const key in keysForMasking) {
            const forMask = keysForMasking[key]
            maskedContent = maskkcard.replaceCreditCardValueInJson(content,forMask)
        }
        return maskedContent;
    }

  

    return {

        logInfoRequest: logInfoRequest,
        logInfoResponse: logInfoResponse,
        logInfoWrite: logInfoWrite,
        logInfoError: logInfoError

    };

};