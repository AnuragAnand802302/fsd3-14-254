let teams = [
    {
        id:1,
        tname:"Rusty",
        tl:'Anurag Anand',
        email:'anurag.30july@gmail.com',
        members:6,
    },
    
    {
        id:2,
        tname:"Custy",
        tl:'Mohan Anand',
        email:'Mohan.30july@gmail.com',
        members:6,
    },
    
];

let nextID = 3;
export const getAllTeams = ()=> teams;

export const getTeamByID = (id)=> teams.find((team)=>team.id === id);

export const addTeam = (newTeam) =>{
    const team = {id: nextID++, newTeam};
    teams.push(team);
    return team;
};

export const updateTeamByID = (id, updateTeam)=>{
    const team = getTeamByID(id);
    if(!team){
        return null;
    }
    Object.assign(team,updateTeam);
    return team;
};

export const deleteTeam = (id)=>{
    const index = teams.findIndex((team)=>team.id === id);
    if(index === -1){
        return false;
    }
    teams.splice(index,1);
    return true;
};