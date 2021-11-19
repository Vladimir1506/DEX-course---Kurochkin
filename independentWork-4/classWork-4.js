const postUser=async()=>{
 const response = await fetch(requestURl,{
    method:'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(user)
  });
  let result = await response.json();
  console.log(result);
}
postUser();