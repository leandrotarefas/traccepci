
const tlog = require("traccelog")
const maskkcard = require("maskkcard")

    function TraccePCI(path, saveCopyAtLocal) {  

        this.path = path;
        this.saveCopyAtLocal = saveCopyAtLocal; 

    }

    TraccePCI.prototype.logInfoRequest = function(id, content, keysForMasking) {
        const maskedContent =  maskContent(content, keysForMasking);
        tlog.logPathRequest(this.path,id, maskedContent);
        
        if(this.saveCopyAtLocal){ tlog.logInfoRequest(id, maskedContent)}
    }

    TraccePCI.prototype.logInfoResponse = function(id, content, keysForMasking) {
        const maskedContent =  maskContent(content, keysForMasking);
        tlog.logPathResponse(this.path,id, maskedContent);

        if(this.saveCopyAtLocal){ tlog.logInfoResponse(id, maskedContent)}
    }

    TraccePCI.prototype.logInfoWrite = function(id, content, keysForMasking) {
        const maskedContent =  maskContent(content, keysForMasking);
        tlog.logPathWrite(this.path,id, maskedContent);

        if(this.saveCopyAtLocal){ tlog.logWrite(id, maskedContent)}
    }

    TraccePCI.prototype.logInfoError = function(id, content, keysForMasking) {
        const maskedContent =  maskContent(content, keysForMasking);
        tlog.logPathError(this.path,id, maskedContent);

        if(this.saveCopyAtLocal){ tlog.logError(id, maskedContent)}
    }

    function maskContent(content, keysForMasking){
        let maskedContent;
        for (const key in keysForMasking) {
            const forMask = keysForMasking[key]
            maskedContent = maskkcard.replaceCreditCardValueInJson(content,forMask)
        }
        return maskedContent;
    }

module.exports = TraccePCI;