﻿var curPath = $.fileName;
var curDir = curPath.substring (0, curPath.lastIndexOf ("/"));
var myXMLFile = new File(curDir + '/forps.xml');
myXMLFile.open('r');
var myXMLString = myXMLFile.read();
myXMLFile.close();
var myXml = new XML( myXMLString );
var docPath = myXml.docPath;
var firstPart = docPath.substring(0, docPath.indexOf("|"));
var secondPart = docPath.substring(docPath.indexOf("|") + 1);
docPath = "/" + firstPart + secondPart;

var companies = myXml.company;

var loadLayersFromScript = true;
//@includepath "/d/program files/adobe/Adobe Photoshop CS6 (64 Bit)/Presets/Scripts/"
//@include "load files into stack.jsx"

for each(var xml in companies){
    var companyName = xml.name;
    var imgXML = xml.images;
var files = [];
for each(var node in imgXML){
        files.push(docPath + "/" + companyName + "/" + node.text());
}
loadLayers.intoStack(files,false);
// =======================================================
var idanimationFramesFromLayers = stringIDToTypeID( "animationFramesFromLayers" );
    var desc39 = new ActionDescriptor();
executeAction( idanimationFramesFromLayers, desc39, DialogModes.NO );

// =======================================================
var idRvrs = charIDToTypeID( "Rvrs" );
    var desc99 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref53 = new ActionReference();
        var idanimationFrameClass = stringIDToTypeID( "animationFrameClass" );
        var idOrdn = charIDToTypeID( "Ordn" );
        var idTrgt = charIDToTypeID( "Trgt" );
        ref53.putEnumerated( idanimationFrameClass, idOrdn, idTrgt );
    desc99.putReference( idnull, ref53 );
executeAction( idRvrs, desc99, DialogModes.NO );

// =======================================================
var idExpr = charIDToTypeID( "Expr" );
    var desc102 = new ActionDescriptor();
    var idUsng = charIDToTypeID( "Usng" );
        var desc103 = new ActionDescriptor();
        var idOp = charIDToTypeID( "Op  " );
        var idSWOp = charIDToTypeID( "SWOp" );
        var idOpSa = charIDToTypeID( "OpSa" );
        desc103.putEnumerated( idOp, idSWOp, idOpSa );
        var idDIDr = charIDToTypeID( "DIDr" );
        desc103.putBoolean( idDIDr, true );
        var idIn = charIDToTypeID( "In  " );
        var newDocPath = docPath.substring(1);
        newDocPath = newDocPath.replace(/\//, "\\\\");
        newDocPath = newDocPath.replace("\\", ":\\");
        newDocPath += "\\" + companyName;
        desc103.putPath( idIn, new File(newDocPath) );
        var idovFN = charIDToTypeID( "ovFN" );
        desc103.putString( idovFN, """animation.gif""" );
        var idFmt = charIDToTypeID( "Fmt " );
        var idIRFm = charIDToTypeID( "IRFm" );
        var idGIFf = charIDToTypeID( "GIFf" );
        desc103.putEnumerated( idFmt, idIRFm, idGIFf );
        var idIntr = charIDToTypeID( "Intr" );
        desc103.putBoolean( idIntr, false );
        var idRedA = charIDToTypeID( "RedA" );
        var idIRRd = charIDToTypeID( "IRRd" );
        var idAdpt = charIDToTypeID( "Adpt" );
        desc103.putEnumerated( idRedA, idIRRd, idAdpt );
        var idRChT = charIDToTypeID( "RChT" );
        desc103.putBoolean( idRChT, false );
        var idRChV = charIDToTypeID( "RChV" );
        desc103.putBoolean( idRChV, false );
        var idAuRd = charIDToTypeID( "AuRd" );
        desc103.putBoolean( idAuRd, false );
        var idNCol = charIDToTypeID( "NCol" );
        desc103.putInteger( idNCol, 256 );
        var idDthr = charIDToTypeID( "Dthr" );
        var idIRDt = charIDToTypeID( "IRDt" );
        var idDfsn = charIDToTypeID( "Dfsn" );
        desc103.putEnumerated( idDthr, idIRDt, idDfsn );
        var idDthA = charIDToTypeID( "DthA" );
        desc103.putInteger( idDthA, 100 );
        var idDChS = charIDToTypeID( "DChS" );
        desc103.putInteger( idDChS, 0 );
        var idDCUI = charIDToTypeID( "DCUI" );
        desc103.putInteger( idDCUI, 0 );
        var idDChT = charIDToTypeID( "DChT" );
        desc103.putBoolean( idDChT, false );
        var idDChV = charIDToTypeID( "DChV" );
        desc103.putBoolean( idDChV, false );
        var idWebS = charIDToTypeID( "WebS" );
        desc103.putInteger( idWebS, 0 );
        var idTDth = charIDToTypeID( "TDth" );
        var idIRDt = charIDToTypeID( "IRDt" );
        var idNone = charIDToTypeID( "None" );
        desc103.putEnumerated( idTDth, idIRDt, idNone );
        var idTDtA = charIDToTypeID( "TDtA" );
        desc103.putInteger( idTDtA, 100 );
        var idLoss = charIDToTypeID( "Loss" );
        desc103.putInteger( idLoss, 13 );
        var idLChS = charIDToTypeID( "LChS" );
        desc103.putInteger( idLChS, 0 );
        var idLCUI = charIDToTypeID( "LCUI" );
        desc103.putInteger( idLCUI, 100 );
        var idLChT = charIDToTypeID( "LChT" );
        desc103.putBoolean( idLChT, false );
        var idLChV = charIDToTypeID( "LChV" );
        desc103.putBoolean( idLChV, false );
        var idTrns = charIDToTypeID( "Trns" );
        desc103.putBoolean( idTrns, true );
        var idMtt = charIDToTypeID( "Mtt " );
        desc103.putBoolean( idMtt, true );
        var idMttR = charIDToTypeID( "MttR" );
        desc103.putInteger( idMttR, 255 );
        var idMttG = charIDToTypeID( "MttG" );
        desc103.putInteger( idMttG, 255 );
        var idMttB = charIDToTypeID( "MttB" );
        desc103.putInteger( idMttB, 255 );
        var idSHTM = charIDToTypeID( "SHTM" );
        desc103.putBoolean( idSHTM, false );
        var idSImg = charIDToTypeID( "SImg" );
        desc103.putBoolean( idSImg, true );
        var idSWsl = charIDToTypeID( "SWsl" );
        var idSTsl = charIDToTypeID( "STsl" );
        var idSLAl = charIDToTypeID( "SLAl" );
        desc103.putEnumerated( idSWsl, idSTsl, idSLAl );
        var idSWch = charIDToTypeID( "SWch" );
        var idSTch = charIDToTypeID( "STch" );
        var idCHsR = charIDToTypeID( "CHsR" );
        desc103.putEnumerated( idSWch, idSTch, idCHsR );
        var idSWmd = charIDToTypeID( "SWmd" );
        var idSTmd = charIDToTypeID( "STmd" );
        var idMDCC = charIDToTypeID( "MDCC" );
        desc103.putEnumerated( idSWmd, idSTmd, idMDCC );
        var idohXH = charIDToTypeID( "ohXH" );
        desc103.putBoolean( idohXH, false );
        var idohIC = charIDToTypeID( "ohIC" );
        desc103.putBoolean( idohIC, true );
        var idohAA = charIDToTypeID( "ohAA" );
        desc103.putBoolean( idohAA, true );
        var idohQA = charIDToTypeID( "ohQA" );
        desc103.putBoolean( idohQA, true );
        var idohCA = charIDToTypeID( "ohCA" );
        desc103.putBoolean( idohCA, false );
        var idohIZ = charIDToTypeID( "ohIZ" );
        desc103.putBoolean( idohIZ, true );
        var idohTC = charIDToTypeID( "ohTC" );
        var idSToc = charIDToTypeID( "SToc" );
        var idOCzerothree = charIDToTypeID( "OC03" );
        desc103.putEnumerated( idohTC, idSToc, idOCzerothree );
        var idohAC = charIDToTypeID( "ohAC" );
        var idSToc = charIDToTypeID( "SToc" );
        var idOCzerothree = charIDToTypeID( "OC03" );
        desc103.putEnumerated( idohAC, idSToc, idOCzerothree );
        var idohIn = charIDToTypeID( "ohIn" );
        desc103.putInteger( idohIn, -1 );
        var idohLE = charIDToTypeID( "ohLE" );
        var idSTle = charIDToTypeID( "STle" );
        var idLEzerothree = charIDToTypeID( "LE03" );
        desc103.putEnumerated( idohLE, idSTle, idLEzerothree );
        var idohEn = charIDToTypeID( "ohEn" );
        var idSTen = charIDToTypeID( "STen" );
        var idENzerozero = charIDToTypeID( "EN00" );
        desc103.putEnumerated( idohEn, idSTen, idENzerozero );
        var idolCS = charIDToTypeID( "olCS" );
        desc103.putBoolean( idolCS, false );
        var idolEC = charIDToTypeID( "olEC" );
        var idSTst = charIDToTypeID( "STst" );
        var idSTzerozero = charIDToTypeID( "ST00" );
        desc103.putEnumerated( idolEC, idSTst, idSTzerozero );
        var idolWH = charIDToTypeID( "olWH" );
        var idSTwh = charIDToTypeID( "STwh" );
        var idWHzeroone = charIDToTypeID( "WH01" );
        desc103.putEnumerated( idolWH, idSTwh, idWHzeroone );
        var idolSV = charIDToTypeID( "olSV" );
        var idSTsp = charIDToTypeID( "STsp" );
        var idSPzerofour = charIDToTypeID( "SP04" );
        desc103.putEnumerated( idolSV, idSTsp, idSPzerofour );
        var idolSH = charIDToTypeID( "olSH" );
        var idSTsp = charIDToTypeID( "STsp" );
        var idSPzerofour = charIDToTypeID( "SP04" );
        desc103.putEnumerated( idolSH, idSTsp, idSPzerofour );
        var idolNC = charIDToTypeID( "olNC" );
            var list4 = new ActionList();
                var desc104 = new ActionDescriptor();
                var idncTp = charIDToTypeID( "ncTp" );
                var idSTnc = charIDToTypeID( "STnc" );
                var idNCzerozero = charIDToTypeID( "NC00" );
                desc104.putEnumerated( idncTp, idSTnc, idNCzerozero );
            var idSCnc = charIDToTypeID( "SCnc" );
            list4.putObject( idSCnc, desc104 );
                var desc105 = new ActionDescriptor();
                var idncTp = charIDToTypeID( "ncTp" );
                var idSTnc = charIDToTypeID( "STnc" );
                var idNConenine = charIDToTypeID( "NC19" );
                desc105.putEnumerated( idncTp, idSTnc, idNConenine );
            var idSCnc = charIDToTypeID( "SCnc" );
            list4.putObject( idSCnc, desc105 );
                var desc106 = new ActionDescriptor();
                var idncTp = charIDToTypeID( "ncTp" );
                var idSTnc = charIDToTypeID( "STnc" );
                var idNCtwoeight = charIDToTypeID( "NC28" );
                desc106.putEnumerated( idncTp, idSTnc, idNCtwoeight );
            var idSCnc = charIDToTypeID( "SCnc" );
            list4.putObject( idSCnc, desc106 );
                var desc107 = new ActionDescriptor();
                var idncTp = charIDToTypeID( "ncTp" );
                var idSTnc = charIDToTypeID( "STnc" );
                var idNCtwofour = charIDToTypeID( "NC24" );
                desc107.putEnumerated( idncTp, idSTnc, idNCtwofour );
            var idSCnc = charIDToTypeID( "SCnc" );
            list4.putObject( idSCnc, desc107 );
                var desc108 = new ActionDescriptor();
                var idncTp = charIDToTypeID( "ncTp" );
                var idSTnc = charIDToTypeID( "STnc" );
                var idNCtwofour = charIDToTypeID( "NC24" );
                desc108.putEnumerated( idncTp, idSTnc, idNCtwofour );
            var idSCnc = charIDToTypeID( "SCnc" );
            list4.putObject( idSCnc, desc108 );
                var desc109 = new ActionDescriptor();
                var idncTp = charIDToTypeID( "ncTp" );
                var idSTnc = charIDToTypeID( "STnc" );
                var idNCtwofour = charIDToTypeID( "NC24" );
                desc109.putEnumerated( idncTp, idSTnc, idNCtwofour );
            var idSCnc = charIDToTypeID( "SCnc" );
            list4.putObject( idSCnc, desc109 );
        desc103.putList( idolNC, list4 );
        var idobIA = charIDToTypeID( "obIA" );
        desc103.putBoolean( idobIA, false );
        var idobIP = charIDToTypeID( "obIP" );
        desc103.putString( idobIP, """""" );
        var idobCS = charIDToTypeID( "obCS" );
        var idSTcs = charIDToTypeID( "STcs" );
        var idCSzeroone = charIDToTypeID( "CS01" );
        desc103.putEnumerated( idobCS, idSTcs, idCSzeroone );
        var idovNC = charIDToTypeID( "ovNC" );
            var list5 = new ActionList();
                var desc110 = new ActionDescriptor();
                var idncTp = charIDToTypeID( "ncTp" );
                var idSTnc = charIDToTypeID( "STnc" );
                var idNCzeroone = charIDToTypeID( "NC01" );
                desc110.putEnumerated( idncTp, idSTnc, idNCzeroone );
            var idSCnc = charIDToTypeID( "SCnc" );
            list5.putObject( idSCnc, desc110 );
                var desc111 = new ActionDescriptor();
                var idncTp = charIDToTypeID( "ncTp" );
                var idSTnc = charIDToTypeID( "STnc" );
                var idNCtwozero = charIDToTypeID( "NC20" );
                desc111.putEnumerated( idncTp, idSTnc, idNCtwozero );
            var idSCnc = charIDToTypeID( "SCnc" );
            list5.putObject( idSCnc, desc111 );
                var desc112 = new ActionDescriptor();
                var idncTp = charIDToTypeID( "ncTp" );
                var idSTnc = charIDToTypeID( "STnc" );
                var idNCzerotwo = charIDToTypeID( "NC02" );
                desc112.putEnumerated( idncTp, idSTnc, idNCzerotwo );
            var idSCnc = charIDToTypeID( "SCnc" );
            list5.putObject( idSCnc, desc112 );
                var desc113 = new ActionDescriptor();
                var idncTp = charIDToTypeID( "ncTp" );
                var idSTnc = charIDToTypeID( "STnc" );
                var idNConenine = charIDToTypeID( "NC19" );
                desc113.putEnumerated( idncTp, idSTnc, idNConenine );
            var idSCnc = charIDToTypeID( "SCnc" );
            list5.putObject( idSCnc, desc113 );
                var desc114 = new ActionDescriptor();
                var idncTp = charIDToTypeID( "ncTp" );
                var idSTnc = charIDToTypeID( "STnc" );
                var idNCzerosix = charIDToTypeID( "NC06" );
                desc114.putEnumerated( idncTp, idSTnc, idNCzerosix );
            var idSCnc = charIDToTypeID( "SCnc" );
            list5.putObject( idSCnc, desc114 );
                var desc115 = new ActionDescriptor();
                var idncTp = charIDToTypeID( "ncTp" );
                var idSTnc = charIDToTypeID( "STnc" );
                var idNCtwofour = charIDToTypeID( "NC24" );
                desc115.putEnumerated( idncTp, idSTnc, idNCtwofour );
            var idSCnc = charIDToTypeID( "SCnc" );
            list5.putObject( idSCnc, desc115 );
                var desc116 = new ActionDescriptor();
                var idncTp = charIDToTypeID( "ncTp" );
                var idSTnc = charIDToTypeID( "STnc" );
                var idNCtwofour = charIDToTypeID( "NC24" );
                desc116.putEnumerated( idncTp, idSTnc, idNCtwofour );
            var idSCnc = charIDToTypeID( "SCnc" );
            list5.putObject( idSCnc, desc116 );
                var desc117 = new ActionDescriptor();
                var idncTp = charIDToTypeID( "ncTp" );
                var idSTnc = charIDToTypeID( "STnc" );
                var idNCtwofour = charIDToTypeID( "NC24" );
                desc117.putEnumerated( idncTp, idSTnc, idNCtwofour );
            var idSCnc = charIDToTypeID( "SCnc" );
            list5.putObject( idSCnc, desc117 );
                var desc118 = new ActionDescriptor();
                var idncTp = charIDToTypeID( "ncTp" );
                var idSTnc = charIDToTypeID( "STnc" );
                var idNCtwotwo = charIDToTypeID( "NC22" );
                desc118.putEnumerated( idncTp, idSTnc, idNCtwotwo );
            var idSCnc = charIDToTypeID( "SCnc" );
            list5.putObject( idSCnc, desc118 );
        desc103.putList( idovNC, list5 );
        var idovCM = charIDToTypeID( "ovCM" );
        desc103.putBoolean( idovCM, false );
        var idovCW = charIDToTypeID( "ovCW" );
        desc103.putBoolean( idovCW, true );
        var idovCU = charIDToTypeID( "ovCU" );
        desc103.putBoolean( idovCU, true );
        var idovSF = charIDToTypeID( "ovSF" );
        desc103.putBoolean( idovSF, true );
        var idovCB = charIDToTypeID( "ovCB" );
        desc103.putBoolean( idovCB, true );
        var idovSN = charIDToTypeID( "ovSN" );
        desc103.putString( idovSN, """images""" );
    var idSaveForWeb = stringIDToTypeID( "SaveForWeb" );
    desc102.putObject( idUsng, idSaveForWeb, desc103 );
executeAction( idExpr, desc102, DialogModes.NO );

var idCls = charIDToTypeID( "Cls " );
    var desc1 = new ActionDescriptor();
    var idSvng = charIDToTypeID( "Svng" );
    var idYsN = charIDToTypeID( "YsN " );
    var idN = charIDToTypeID( "N   " );
    desc1.putEnumerated( idSvng, idYsN, idN );
executeAction( idCls, desc1, DialogModes.NO );
}
