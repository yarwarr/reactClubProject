const clubs = [
    {"id":1,"name":"Club Arcane","max_cap": 100,"yellow_thr": 70},
    {"id":2,"name":"Club Underground","max_cap": 50,"yellow_thr": 30},
    {"id":3,"name":"Club Soda","max_cap": 20,"yellow_thr": 12},
    {"id":4,"name":"Club Paradisio","max_cap": 52,"yellow_thr": 32}
]
var cyan = "#00ffff";
var yellow = "#ffff00";
var red = "#ff0000";
let global_arcane_count = 0;
let global_underground_count = 0;
let global_soda_count = 0;
let global_paradisio_count = 0;

function getClubStatus(club_name, club_count) {
    for(let i = 0; i < clubs.length; i++) {
        if(clubs[i].name == club_name) {
            if(club_count < clubs[i].yellow_thr) {
                return [cyan, "Welcome"];
            } else if(club_count < clubs[i].max_cap && club_count >= clubs[i].yellow_thr) {
                return [yellow, "Warn the bouncers…"];
            } else {
                return [red, "No one allowed in!"];
            }
        }
    }
}


function add(){
    let radio_buttons = document.getElementsByName("club")
    let club_id = null
    
    for(let i = 0; i < radio_buttons.length; i++){
        if(radio_buttons[i].checked){
            club_id = radio_buttons[i].value
            
        }
    }
    if(club_id == "arcane"){
        // everytime the club is arcane
        //first we have to check what the current count is
        //then we have to increment it by 1
        global_arcane_count += 1
        if(global_arcane_count>100){
            global_arcane_count = 100
        }
        let arcane = document.getElementsByClassName("Arcane")
        let local_color = getClubStatus("Club Arcane", global_arcane_count)
        arcane[0].style.backgroundColor = local_color[0]
        arcane[0].textContent = "Club Arcane               " +local_color[1]
        arcane[0].style.textAlign = "center"
        

        let arcane_count = document.getElementsByClassName("ArcaneCount")
        arcane_count[0].textContent = global_arcane_count
        return
    }

    else if(club_id == "paradisio"){
        // everytime the club is paradisio
        //first we have to check what the current count is
        //then we have to increment it by 1
        global_paradisio_count += 1
        if(global_paradisio_count>52){
            global_paradisio_count = 52
        }
        let paradisio = document.getElementsByClassName("Paradisio")
        let local_color = getClubStatus("Club Paradisio", global_paradisio_count)
        paradisio[0].style.backgroundColor = local_color[0]
        paradisio[0].textContent = "Club Paradisio               " +local_color[1]
        paradisio[0].style.textAlign = "center"
        

        let paradisio_count = document.getElementsByClassName("ParadisioCount")
        paradisio_count[0].textContent = global_paradisio_count
        return
    }

    else if(club_id == "soda"){
        // everytime the club is soda
        //first we have to check what the current count is
        //then we have to increment it by 1
        global_soda_count += 1
        if(global_soda_count>20){
            global_soda_count = 20
        }
        let soda = document.getElementsByClassName("Soda")
        let local_color = getClubStatus("Club Soda", global_soda_count)
        soda[0].style.backgroundColor = local_color[0]
        soda[0].textContent = "Club Soda                  " +local_color[1]
        soda[0].style.textAlign = "center"
        

        let soda_count = document.getElementsByClassName("SodaCount")
        soda_count[0].textContent = global_soda_count
        return
    }

    else if(club_id == "underground"){
        // everytime the club is underground
        //first we have to check what the current count is
        //then we have to increment it by 1
        global_underground_count += 1
        if(global_underground_count>50){
            global_underground_count = 50
        }
        let underground = document.getElementsByClassName("Underground")
        let local_color = getClubStatus("Club Underground", global_underground_count)
        underground[0].style.backgroundColor = local_color[0]
        underground[0].textContent = "Club Underground                                               " +local_color[1]
        underground[0].style.textAlign = "center"
        

        let underground_count = document.getElementsByClassName("UndergroundCount")
        underground_count[0].textContent = global_underground_count
        return
    }

}

function leave(){
    let radio_buttons = document.getElementsByName("club")
    let club_id = null
    
    for(let i = 0; i < radio_buttons.length; i++){
        if(radio_buttons[i].checked){
            club_id = radio_buttons[i].value
            
        }
    }
    if(club_id == "arcane"){
        // everytime the club is arcane
        //first we have to check what the current count is
        //then we have to increment it by 1
        global_arcane_count -= 1
        if(global_arcane_count<0){
            global_arcane_count = 0
        }
        let arcane = document.getElementsByClassName("Arcane")
        let local_color = getClubStatus("Club Arcane", global_arcane_count)
        arcane[0].style.backgroundColor = local_color[0]
        arcane[0].textContent = "Club Arcane                    " +local_color[1]
        arcane[0].style.textAlign = "center"
        

        let arcane_count = document.getElementsByClassName("ArcaneCount")
        arcane_count[0].textContent = global_arcane_count
        return
    }

    else if(club_id == "paradisio"){
        // everytime the club is paradisio
        //first we have to check what the current count is
        //then we have to increment it by 1
        global_paradisio_count -= 1
        if(global_paradisio_count<0){
            global_paradisio_count = 0
        }
        let paradisio = document.getElementsByClassName("Paradisio")
        let local_color = getClubStatus("Club Paradisio", global_paradisio_count)
        paradisio[0].style.backgroundColor = local_color[0]
        paradisio[0].textContent = "Club Paradisio                       " +local_color[1]
        paradisio[0].style.textAlign = "center"
        

        let paradisio_count = document.getElementsByClassName("ParadisioCount")
        paradisio_count[0].textContent = global_paradisio_count
        return
    }

    else if(club_id == "soda"){
        // everytime the club is soda
        //first we have to check what the current count is
        //then we have to increment it by 1
        global_soda_count -= 1
        if(global_soda_count<0){
            global_soda_count = 0
        }
        let soda = document.getElementsByClassName("Soda")
        let local_color = getClubStatus("Club Soda", global_soda_count)
        soda[0].style.backgroundColor = local_color[0]
        soda[0].textContent = "Club Soda                     " +local_color[1]
        soda[0].style.textAlign = "center"
        

        let soda_count = document.getElementsByClassName("SodaCount")
        soda_count[0].textContent = global_soda_count
        return
    }

    else if(club_id == "underground"){
        // everytime the club is underground
        //first we have to check what the current count is
        //then we have to increment it by 1
        global_underground_count -= 1
        if(global_underground_count<0){
            global_underground_count = 0
        }
        let underground = document.getElementsByClassName("Underground")
        let local_color = getClubStatus("Club Underground", global_underground_count)
        underground[0].style.backgroundColor = local_color[0]
        underground[0].textContent = "Club Underground                " +local_color[1]
        underground[0].style.textAlign = "center"
        

        let underground_count = document.getElementsByClassName("UndergroundCount")
        underground_count[0].textContent = global_underground_count
        return
    }

}

