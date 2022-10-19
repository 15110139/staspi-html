const host = "https://reqres.in";

const getUser = async () => {
    try{
        const response = await fetch(`${host}/api/users?page=2`).then(
            res => {
                return res.json();
            }
        ).then(
            data => {
                data.data.forEach(
                    user => {
                        // console.log(user.first_name);
                        const fname = `<li>${user.first_name}</li>`
                        document.getElementById("check").insertAdjacentHTML('beforeend',fname);
                    }
                )
            }
        )
    }catch(e){
        console.log(e);
    }
    
}