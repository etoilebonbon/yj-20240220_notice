export async function apiPostNoticeWrite(formData) {
  try {
    // console.log("API", formData);
    return await fetch(
      "https://port-0-yj4-express-0214-ac2nll079p0k.sel4.cloudtype.app/notice/write",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    ).then((res) => res.json());
  } catch (error) {
    console.log(error);
  }
}
