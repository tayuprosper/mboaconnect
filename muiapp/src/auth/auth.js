export const login = async (user) => {
  const url = "https://code4changehackerthon25.onrender.com/token";
console.log(user);
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({ 
      username: user.email,
      password: user.password 
    }),
    });

    // Check if response is successful
    if (!response.ok) {
      const errorText = await response.text();
      console.error("Login failed:", errorText);
      return null;
    }

    const data = await response.json();

    // Optional: Save token to localStorage
    if (data.access_token) {
      localStorage.setItem("token", data.access_token);
    }
    if (data.role){
      localStorage.setItem("role", data.role);
    }
    return data;

  } catch (error) {
    console.error("Error during login:", error);
    return null;
  }
};


export const signup = async (user)=>{
    const url = "https://code4changehackerthon25.onrender.com/users/";
console.log("signin ", user);

    const response = await fetch(url, {
        method: "POST",
        headers:{ "Content-Type": "Application/json"},
        body: JSON.stringify(user)

    })

    if(!response.ok){
        const res = await response.text();
        console.error("Login failed:", res);
        return null;
    }

    const data = await response.json();
    console.log(data);
    return data;
}