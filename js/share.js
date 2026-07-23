// ==========================================================
// share.js
// SNS共有ボタンの動作をまとめたスクリプト
// ==========================================================
document.addEventListener('DOMContentLoaded', () => {
  const pageUrl = window.location.href;
  const pageTitle = document.title;

  const shareX = document.getElementById('shareX');
  if (shareX) {
    shareX.href =
      'https://twitter.com/intent/tweet' +
      '?text=' + encodeURIComponent(pageTitle) +
      '&url=' + encodeURIComponent(pageUrl);
  }

  const shareLine = document.getElementById('shareLine');
  if (shareLine) {
    shareLine.href =
      'https://social-plugins.line.me/lineit/share' +
      '?url=' + encodeURIComponent(pageUrl);
  }

  const shareCopy = document.getElementById('shareCopy');
  if (shareCopy) {
    shareCopy.addEventListener('click', () => {
      navigator.clipboard.writeText(pageUrl).then(() => {
        const originalText = shareCopy.textContent;
        shareCopy.textContent = 'コピーしました！';
        shareCopy.classList.add('is-copied');
        setTimeout(() => {
          shareCopy.textContent = originalText;
          shareCopy.classList.remove('is-copied');
        }, 2000);
      }).catch(() => {
        alert('コピーに失敗しました。お手数ですがURLを手動でコピーしてください。');
      });
    });
  }
});
