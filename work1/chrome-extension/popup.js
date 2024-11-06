document.getElementById('myButton').addEventListener('click', () => {
    alert('欢迎来到我的github!');
    chrome.tabs.create({ url: 'https://github.com/wallgreataa' });
  });
  