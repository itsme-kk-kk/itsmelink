const shareButton = document.querySelector("#shareButton");
const toast = document.querySelector("#toast");
const year = document.querySelector("#year");

year.textContent = new Date().getFullYear();

shareButton.addEventListener("click", async () => {
  const shareData = {
    title: document.title,
    text: "마운자로와 함께하는 잇츠미의 기록",
    url: window.location.href,
  };

  try {
    if (navigator.share) {
      await navigator.share(shareData);
      return;
    }

    await navigator.clipboard.writeText(window.location.href);
    toast.classList.add("show");
    window.setTimeout(() => toast.classList.remove("show"), 1800);
  } catch (error) {
    if (error?.name !== "AbortError") {
      toast.textContent = "주소창의 링크를 복사해 주세요.";
      toast.classList.add("show");
      window.setTimeout(() => toast.classList.remove("show"), 1800);
    }
  }
});
