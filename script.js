function copyAddress() {
  const address = "0xPEPEBULLCONTRACTADDRESS";
  navigator.clipboard.writeText(address);
  document.getElementById("copied").innerText = "Contract address copied!";
}
