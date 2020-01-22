
	
 /* Functions Used For xueSearch */


printElement = document.getElementById("outputXueList");
//------------------------------------------------------------------------------------------------------------------------

function SortAndRemoveDuplicates(array) {
	array.sort();
	for (i=0; i<array.length-1; i++){
		if(array[i] === array[i+1]) {
			array.splice(i,1);
			i=i-1
		}
	}
	return array
}

//------------------------------------------------------------------------------------------------------------------------

function FindXueByIndex(){
	var userIndex = document.getElementById("xueIndex").value;	
	var channel, foundXue;	
	var jingLetter = userIndex.replace(/[0-9]/g, '');
	var xueNumber = parseInt(userIndex.replace(/\D/g,''));
	if(jingLetter === "PC" || jingLetter === "PN") {
		channel = qiXue
		for (j=0; j<channel.xueList.length; j++) {
			if(channel.xueList[j].index === userIndex){
				foundXue = channel.xueList[j];
				break;
			}
		}
			
	}
	else {	
		for (i = 0; i < fullXueSystem.length; ++i){		
			if (jingLetter === fullXueSystem[i].index){
				channel = fullXueSystem[i];
				// alert(channel.name);
				foundXue = channel.xueList[xueNumber-1];
				break;
			}			
		}
		
	}	 
	var foundXueFilter = fullXueArray.filter(a => a.index = userIndex)
	
	PrintXueInfo(foundXue)
}

//------------------------------------------------------------------------------------------------------------------------

function FindXueByName(){
	// alert("Starting FindXueByName")
	var selectedXueName = document.getElementById("xueName").value;	
	console.log(selectedXueName)
	var channel, xueNumber;
	var foundXueList = []
	var foundXueCounter = 0
	for (i = 0; i < fullXueSystem.length; ++i){		
		for (j = 0; j < fullXueSystem[i].xueList.length; ++j){
			if (selectedXueName === fullXueSystem[i].xueList[j].name){
				console.log("xue with given name is found on jing number "+(i+1)+" at position number "+(j+1))
				channel = fullXueSystem[i];
				xueNumber = j+1
				foundXueList.push(fullXueSystem[i].xueList[j])
				// alert(channel.name)
				foundXueCounter = foundXueCounter+1
			}			
		}		
	}
	//printElement = document.getElementById("outputXueList")
	
	foundXueList.forEach(PrintXueInfo);
}

//------------------------------------------------------------------------------------------------------------------------

function FindXueBySymptom () {
	var selectedXueSymptom = document.getElementById("xueSymptom").value;	
	console.log("Selected symptom is: " + selectedXueSymptom)
	
	console.log("Filtering the xue array")
	
	
	var foundXueList = fullXueArray.filter(a => a.symptoms.includes(selectedXueSymptom))
	
	console.log("Printing the information for " + foundXueList.length + "found xue")
	
	foundXueList.forEach(PrintXueInfo);

		
}	

//------------------------------------------------------------------------------------------------------------------------

function PrintXueInfo(xue){
	console.log("Getting the info to print to the user for " + xue.name)
	var xueElem = document.createElement("DIV");

	img = document.createElement('img');
	img.src = GetXuePicturePath(xue);
    img.style.cssFloat = "right";
	xueElem.appendChild(img);
	
	a = document.createElement("A");
	a.innerHTML = "<strong>" + xue.name+"("+xue.index+"). " + "</strong>" +"<br />"+ "<strong>" + "Располагается " + "</strong>"+xue.specificLocation + "<strong>" +"<br />"+ "Основные показания к использованию: " + "</strong>"+xue.symptoms.join(', ')+"." + "<strong>" +"<br />"+ "Техника применения: " + "</strong>"+xue.technique +"<br />"+ "<strong>" + xue.specialInfo+ "<br />";
	//a.style.width = '150px';
	//a.style.color = 'purple';
	a.style.height = "100px";
	xueElem.appendChild(a);
	
	printElement.appendChild(xueElem);
	
	
	
	
	
}

//------------------------------------------------------------------------------------------------------------------------

function GetXuePicturePath(xue) {	
	console.log("Getting the picture path for " + xue.name)
	var jingLetter = xue.index.replace(/[0-9]/g, '')	
	var xueNumber = xue.index.replace(/\D/g,'')
	console.log("The letter is "+jingLetter+" and the number is "+xueNumber)
	if(jingLetter === "PC" || jingLetter === "PN") {
		return "xuePics/PC/"+xue.index+".jpg";
	}
	for (i=0; i<fullPicsNames.length; i++) {
		if (fullPicsNames[i][0].includes(jingLetter+".")){
			for(j=0; j<fullPicsNames[i].length; j++){
				if(fullPicsNames[i][j].includes(xueNumber+".")){
					console.log("Picture path for the "+xue.name+" is "+"xuePics/"+jingLetter+"/"+fullPicsNames[i][j]+"gif");
					return "xuePics/"+jingLetter+"/"+fullPicsNames[i][j]+"gif"
				}
			}
		}
	}
}

//------------------------------------------------------------------------------------------------------------------------

function myAutocomplete(inp, arr) {
  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  var currentFocus;
  /*execute a function when someone writes in the text field:*/
  inp.addEventListener("input", function(e) {
      var a, b, i, val = this.value;
      /*close any already open lists of autocompleted values*/
      closeAllLists();
      if (!val) { return false;}
      currentFocus = -1;
      /*create a DIV element that will contain the items (values):*/
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      /*append the DIV element as a child of the autocomplete container:*/
      this.parentNode.appendChild(a);
      /*for each item in the array...*/
      for (i = 0; i < arr.length; i++) {
        /*check if the item starts with the same letters as the text field value:*/
        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          /*create a DIV element for each matching element:*/
          b = document.createElement("DIV");
          /*make the matching letters bold:*/
          b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].substr(val.length);
          /*insert a input field that will hold the current array item's value:*/
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
          /*execute a function when someone clicks on the item value (DIV element):*/
              b.addEventListener("click", function(e) {
              /*insert the value for the autocomplete text field:*/
              inp.value = this.getElementsByTagName("input")[0].value;
              /*close the list of autocompleted values,
              (or any other open lists of autocompleted values:*/
              closeAllLists();
          });
          a.appendChild(b);
        }
      }
  });
  
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
        currentFocus++;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 38) { //up
        /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
        currentFocus--;
        /*and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 13) {
        /*If the ENTER key is pressed, prevent the form from being submitted,*/
        e.preventDefault();
        if (currentFocus > -1) {
          /*and simulate a click on the "active" item:*/
          if (x) x[currentFocus].click();
        }
      }
  });

//------------------------------------------------------------------------------------------------------------------------
  
  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }

//------------------------------------------------------------------------------------------------------------------------
  
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }

//------------------------------------------------------------------------------------------------------------------------
  
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
      x[i].parentNode.removeChild(x[i]);
    }
  }
}

/*execute a function when someone clicks in the document:*/
document.addEventListener("click", function (e) {
    closeAllLists(e.target);
});
}

//Dropdown response action

/* var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
} */





















 