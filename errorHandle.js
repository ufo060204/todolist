function errorHandle(res) {
  const headers = {
    // 允許的 header
    "Access-Control-Allow-Headers":
      "Content-Type, Authorization, Content-Length, X-Requested-With",
    // 跨網域皆可存取
    "Access-Control-Allow-Origin": "*",
    // 允許的 method
    "Access-Control-Allow-Methods": "PATCH, POST, GET,OPTIONS,DELETE",

    "Content-Type": "application/json",
  };
  res.writeHead(400, headers);
  res.write(
    JSON.stringify({
      status: "false",
      message: "欄位未填寫正確，或是無此 to id",
    })
  );
  res.end();
}

module.exports = errorHandle;