export const getCourses = async (setCourses) => {
    const token = localStorage.getItem("token");
   const data =await fetch('https://code4changehackerthon25.onrender.com/enrollments/', {
        method: "GET",
        headers: {
            "Content-type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    }) 

if (!data.ok){
    console.log("res" , data.text())
    setCourses([])
}else{
const f = await data.json();
console.log(f);
setCourses(f);
}


}

export const handlePay = async (course, phoneNumber) => {
    // e.preventDefault();
    const token = localStorage.getItem("token");
    console.log(course);
    try {
      const res = await fetch('https://code4changehackerthon25.onrender.com/payments/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          amount: course.price,
          course_id: course.id,
          payment_method: 'mtn_momo',
          phone_number: phoneNumber
        })
      });

      if (!res.ok) throw new Error('Payment failed', Error.toString());

      const data = await res.json();
      return data;
    } catch (err) {
      alert(err.message, err.details);
    } finally {
      console.log("completed");
    }
  };