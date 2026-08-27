const copyButton = document.querySelector("#copyCode");
const inviteCode = document.querySelector("#inviteCode");
const toast = document.querySelector("#toast");

copyButton.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(inviteCode.textContent.trim());
    copyButton.textContent = "복사 완료";
    toast.classList.add("show");
    window.setTimeout(() => {
      copyButton.textContent = "코드 복사";
      toast.classList.remove("show");
    }, 1800);
  } catch {
    copyButton.textContent = "itsme2026";
  }
});
