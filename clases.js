class user{
constructor()
{

}
firstname;//="spandana";
lastname;//="beerukuri";

getFullName()
{
    return this.firstname+this.lastname;
}



}

var u=new user("spa","beer");
console.log(u.getFullName());