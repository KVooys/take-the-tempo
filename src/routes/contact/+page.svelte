<svelte:head>
	<title>Contact</title>
</svelte:head>


<h1>Contact</h1>

This site was made by Kurt Vooys. You can get in touch with me here.

<form name="take-the-tempo-contact-form" method="POST" data-netlify="true">
	<p>
	  <label>Your Name: <input type="text" name="name" /></label>
	</p>
	<p>
	  <label>Your Email: <input type="email" name="email" /></label>
	</p>
	<p>
	  <label>Message: <textarea name="message" placeholder="Your message here..."></textarea></label>
	</p>
	<p>
	  <button type="submit">Send</button>
	</p>
  </form>