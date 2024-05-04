var pasList = [];

// Funcion para agregar datos de los alumnos
function addPas(vnum, vname, vpapellido, vsapellido, vcal1, vcal2,vcal3, vcal4){

    //Creacion de la variable de tipo Objeto
    var newPas ={
        num : vnum,
        name : vname,
        papellido : vpapellido,
        sapellido : vsapellido,
        cal1 : vcal1,
        cal2 : vcal2,
        cal3 : vcal3,
        cal4 : vcal4,
    };
    console.log(newPas);
    pasLis.push(newPas);
    myLocalStoragePasList(pasLis);
}

function getPasList(){
    var storageList = localStorage.getItem('localPasList');
    if(storageList == null){
        pasLis = []; 
    }else{
        pasLis = JSON.parse(storageList);
    }
    return pasLis;
}


function myLocalStoragePasList(vlist){
    localStorage.setItem('localPasList',JSON.stringify(vlist));
}

function deleteRow(index) {
    var list = getPasList();
    
    list.splice(index, 1);

    myLocalStoragePasList(list);

    tablePas();
}

