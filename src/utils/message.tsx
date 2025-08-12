export function Message({ nameUser } : {nameUser: string}) {
  return `
<div style="width: 100%; height: 100%; display: block; text-align: center;">
  <div style="display: inline-block; width: 100%; max-width: 600px; background: #7373730a; border: 1px solid #47494912; border-radius: 1rem; padding: 2rem; text-align: left; box-sizing: border-box;">
    
    <!-- Top image -->
    <div style="width: 100%; text-align: center; margin-bottom: 2rem;">
      <img src="https://i.imgur.com/NLDsm8X.jpeg" alt="logo" style="width: 100%; max-width: 18rem; height: auto;" />
    </div>

    <!-- Message text -->
    <p style="color: #000; font-size: 1rem; margin-bottom: 1rem;">Hello <strong>${nameUser}</strong> 👋</p>
    <p style="color: #000; font-size: 1rem; margin-bottom: 1rem;">Thank you for reaching out and for your interest in our services. 😊</p>
    <p style="color: #000; font-size: 1rem; margin-bottom: 1rem;">We have received your message and one of our specialists will contact you soon to assist you with whatever you need.</p>
    <p style="color: #000; font-size: 1rem; margin-bottom: 1rem;">We love connecting with people like you, who are looking for solutions and want to make their ideas a reality. 💡</p>
    <p style="color: #000; font-size: 1rem; margin-bottom: 2rem;">We are here to help you! 💻📞</p>

    <!-- Middle image -->
    <div style="width: 100%; text-align: center; margin-bottom: 2rem;">
      <img src="https://i.imgur.com/NLDsm8X.jpeg" alt="logo" style="width: 100%; max-width: 11rem; height: auto;" />
    </div>

    <!-- Social icons -->
    <div style="width: 100%; text-align: center; margin-bottom: 2rem;">
      <img src="https://i.imgur.com/xoBr3HN.jpeg" alt="logo" style="width: 1.5rem; height: 1.5rem; margin: 0 0.5rem; cursor: pointer;" />
      <img src="https://i.imgur.com/dZplGIW.png" alt="logo" style="width: 1.5rem; height: 1.5rem; margin: 0 0.5rem; cursor: pointer;" />
      <img src="https://i.imgur.com/6BXg688.png" alt="logo" style="width: 1.5rem; height: 1.5rem; margin: 0 0.5rem; cursor: pointer;" />
      <img src="https://i.imgur.com/kMkuDXp.jpeg" alt="logo" style="width: 1.5rem; height: 1.5rem; margin: 0 0.5rem; cursor: pointer;" />
    </div>

    <!-- Footer -->
    <div style="text-align: center;">
      <p style="color: #000; font-size: 0.9rem; margin-bottom: 0.5rem;">Have questions? Feel free to reply to this message. We are here to help you.</p>
      <p style="color: #000; font-size: 0.9rem; margin-bottom: 0.5rem;">You received this email because you contacted us through our contact form.</p>
      <p style="color: #9ca3af; font-size: 0.9rem; margin-bottom: 0.5rem;">Policies and Privacy</p>
      <p style="color: #000; font-size: 0.9rem; margin-top: 10px;">© 2025 Cyber, all rights reserved</p>
    </div>

  </div>
</div>
  `;
}