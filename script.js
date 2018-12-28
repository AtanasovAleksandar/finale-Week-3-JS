var Name = '';
var Address = '';
var City = '';
var Country = '';
var PinCode = '';
var userObj;
var counter = 0;
var indexOfTableRow;

var SelectedObject;

var Users = [];
var user = { id: '', name: '', address: '', city: '', pincod: '', country: '' }

function validationOnInput() {
    
    


    document.getElementById('paginat').style.display = 'block'
    var getName = document.getElementById('inputName')
    var getAddress = document.getElementById('inputAddress')
    var getCity = document.getElementById('inputCity')
    var getCountry = document.getElementById('inputCountry')
    var getPinCode = document.getElementById('inputPinCode')

    if (document.getElementById('inputName').value == '') {
        getName.classList.add("not-valid");
    } else {
        getName.classList.remove("not-valid");
        user.name = document.getElementById('inputName').value;
        user.id = counter
    }

    if (document.getElementById('inputAddress').value == '') {
        getAddress.classList.add('not-valid');
    } else {
        getAddress.classList.remove("not-valid");
        user.address = document.getElementById('inputAddress').value;
    }

    if (document.getElementById('inputCity').value == '') {
        getCity.classList.add('not-valid');
    } else {
        getCity.classList.remove('not-valid');
        user.city = document.getElementById('inputCity').value;
    }

    if (document.getElementById('inputCountry').value == '') {
        getCountry.classList.add('not-valid');
    } else {
        getCountry.classList.remove('not-valid');
        user.country = document.getElementById('inputCountry').value;
    }

    if (document.getElementById('inputPinCode').value == '') {
        getPinCode.classList.add('not-valid');
    } else {
        getPinCode.classList.remove('not-valid');
        user.pincod = document.getElementById('inputPinCode').value
    }

    this.Name = this.user.name;
    this.Address = this.user.address;
    this.City = this.user.city;
    this.Country = this.user.country;
    this.PinCode = this.user.pincod;

    userObj = Object.assign({}, user);
    // console.log(userObj)

    if (this.Name != '' && this.Address != '' && this.City != '' && this.PinCode != '' && this.Country != '') {

        document.getElementById('numOfUsers').style.display = 'block';
        document.getElementById('userNumber').textContent = Users.length + 1;
        Users.push(userObj);
        // Users.push(user)

        addRowInTable()
        console.log(this.user);
        console.log(this.Users);

        this.user.name = ''
        this.user.address = ''
        this.user.city = ''
        this.user.country = ''
        this.user.pincod = ''


        this.Name = ''
        this.Address = ''
        this.City = ''
        this.Country = ''
        this.PinCode = ''

        document.getElementById('inputName').value = '';
        document.getElementById('inputAddress').value = '';
        document.getElementById('inputCity').value = '';
        document.getElementById('inputCountry').value = '';
        document.getElementById('inputPinCode').value = '';
    }
}

function addRowInTable() {

    var table = document.getElementById("myTable");
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);

    counter++;
    var idOnEle = user.id;
    cell1.innerHTML = user.id + 1;
    cell2.innerHTML = user.name;
    cell3.innerHTML = user.address;
    cell4.innerHTML = user.city;
    cell5.innerHTML = user.pincod;
    cell6.innerHTML = user.country
    cell7.innerHTML = '<i onclick="alertInfo(this)" class="fas fa-eye"></i> <i onclick="ShowRowForEdit(this)" id="editeble' + idOnEle + '" class="fas fa-pen"></i> <i onclick="saveNewValues(this)" id="saveData' + idOnEle + '" class="fas fa-save saveBtn" style="display:none"></i><i onclick="deletRow(this)" class="far fa-trash-alt"></i>';
}

function deletRow(r) {
    indexOfTableRow = r.parentNode.parentNode.rowIndex;
    document.getElementById('userNumber').textContent = Users.length - 1;
    
    indexOfTableRow
    document.getElementById("myTable").deleteRow(indexOfTableRow);
    counter--

    if (counter < 1) {
        document.getElementById('paginat').style.display = 'none'
        document.getElementById('numOfUsers').style.display = 'none'
    }
}

function alertInfo(row) {
    var elem = row.parentNode.parentNode.rowIndex;
    console.log(elem)
    for (var i = 0; i < Users.length; i++) {
        if (Users[i].id == elem - 1) {
            var UserObject = Users[i];
            console.log(UserObject)
        }
    }
    alert(' Name: ' + UserObject.name + ' Addres: ' + UserObject.address + ' City: ' + UserObject.city)
}

function ShowRowForEdit(row) {
    var elem = row.parentNode.parentNode.rowIndex;
    console.log(elem)
    console.log(row.parentNode.parentNode)

    // var icon = document.getElementById('editeble' + user.id)
    // icon.classList.add('fa-save')

    var colName = row.parentNode.parentNode.childNodes[1]
    var colAddess = row.parentNode.parentNode.childNodes[2]
    var colCity = row.parentNode.parentNode.childNodes[3]
    var colPinCode = row.parentNode.parentNode.childNodes[4]
    var colCountry = row.parentNode.parentNode.childNodes[5]

    var oldName = colName.innerHTML;
    var oldAddres = colAddess.innerHTML
    var oldCity = colCity.innerHTML
    var oldPinCOde = colPinCode.innerHTML
    var oldCountry = colCountry.innerHTML

    colName.innerHTML = "<input id='setName' type='text'>"
    colAddess.innerHTML = "<input id='setAddr' type='text'>"
    colCity.innerHTML = "<input id='setCit' type='text'>"
    colPinCode.innerHTML = "<input id='setPinCod' type='text'>"
    colCountry.innerHTML = "<input id='setCount' type='text'>"

    document.getElementById('setName').value = oldName;
    document.getElementById('setAddr').value = oldAddres;
    document.getElementById('setCit').value = oldCity;
    document.getElementById('setPinCod').value = oldPinCOde;
    document.getElementById('setCount').value = oldCountry;

    var elem = row.parentNode.parentNode.rowIndex;
    console.log(elem)
    elVal = elem - 1
    for (var i = 0; i < Users.length; i++) {
        if (Users[i].id == elVal) {
            var UserObject = Users[i];
            console.log(UserObject)
        }
    }

    
    document.getElementById("editeble" + UserObject.id).style.display = "none";
    document.getElementById("saveData" + UserObject.id).style.display = "block";
}

function saveNewValues(table, icon, elem) {
    var newName = document.getElementById('setName').value
    var newAddress = document.getElementById('setAddr').value
    var newCity = document.getElementById('setCit').value;
    var newPinCode = document.getElementById('setPinCod').value
    var newCountry = document.getElementById('setCount').value
    console.log(newName, newAddress, newCity, newPinCode, newCountry)

    var elem = table.parentNode.parentNode.rowIndex;
    console.log(elem)
    var el = elem - 1;
    for (var i = 0; i < Users.length; i++) {
        if (Users[i].id == el) {
            var UserObject = Users[i];
        }
    }

    console.log(table.parentNode)

    table.parentNode.parentNode.childNodes[1].innerHTML = newName
    table.parentNode.parentNode.childNodes[2].innerHTML = newAddress
    table.parentNode.parentNode.childNodes[3].innerHTML = newCity
    table.parentNode.parentNode.childNodes[4].innerHTML = newPinCode
    table.parentNode.parentNode.childNodes[5].innerHTML = newCountry

    UserObject.name = newName
    UserObject.address = newAddress
    UserObject.city = newCity
    UserObject.pincod = newPinCode
    UserObject.country = newCountry

    document.getElementById("editeble" + UserObject.id).style.display = "block";
    document.getElementById("saveData" + UserObject.id).style.display = "none";

}

function takeValues() {
    document.getElementById('formGroupChangeName').value = userObj.name
    document.getElementById('formGroupChangeAddress').value = userObj.address
    document.getElementById('formGroupChangeCity').value = userObj.city
    document.getElementById('formGroupChangePinCode').value = userObj.pincod
    document.getElementById('formGroupChangeCountry').value = userObj.country
}

function changeRow(r) {
    user.name = document.getElementById('formGroupChangeName').value
    user.address = document.getElementById('formGroupChangeAddress').value
    user.city = document.getElementById('formGroupChangeCity').value
    user.pincod = document.getElementById('formGroupChangePinCode').value
    user.country = document.getElementById('formGroupChangeCountry').value

    var elem = r.parentNode.parentNode.rowIndex;
    console.log(elem)

}

function ShowAddForm() {
    document.getElementById("addForm").style.display = 'block';
    document.getElementById('addBtn').style.display = 'none'
    document.getElementById('tableSerchRow').style.display = 'block';
}








