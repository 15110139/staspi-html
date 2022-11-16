const host = "http://localhost:1337";

const getUser = async () => {
  try {
    const response = await fetch(`${host}/api/posts`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        data.data.forEach((user) => {
          console.log(user);
          // const fname = `<li>${user.first_name}</li>`
          // document.getElementById("check").insertAdjacentHTML('beforeend',fname);
        });
      });
  } catch (e) {
    console.log(e);
  }
};
