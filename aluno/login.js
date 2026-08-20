gx.evt.autoSkip = false;
function login() {
    this.ServerClass = "login";
    this.PackageName = "GeneXus.Programs";
    this.setObjectType("web");
    this.hasEnterEvent = false;
    this.autoRefresh = true;
    this.SetStandaloneVars = function() {
        this.AV37rec_sis_usuarioid = gx.fn.getControlValue("vREC_SIS_USUARIOID")
    }
    ;
    this.e13092_client = function() {
        this.executeServerEvent("ENTER", true)
    }
    ;
    this.e14092_client = function() {
        this.executeServerEvent("CANCEL", true)
    }
    ;
    this.GXValidFnc = [];
    this.GXCtrlIds = [2, 5, 8, 33];
    this.GXLastCtrlId = 33;
    this.GXValidFnc[2] = {
        fld: "TBMASTER",
        grid: 0
    };
    this.GXValidFnc[5] = {
        fld: "TABLE1",
        grid: 0
    };
    this.GXValidFnc[8] = {
        fld: "TABLE2",
        grid: 0
    };
    this.GXValidFnc[33] = {
        fld: "TEXTBLOCK1",
        format: 1,
        grid: 0
    };
    this.AV37rec_sis_usuarioid = "";
    this.ServerEvents = ["e13092_client", "e14092_client"];
    this.VarControlMap.AV37rec_sis_usuarioid = {
        id: "vREC_SIS_USUARIOID",
        grid: 0,
        type: "char"
    };
    this.SetStandaloneVars()
}
login.prototype = new gx.GxObject;
gx.setParentObj(new login());
