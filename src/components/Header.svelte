<script>
	import logo from '../static/logo.png'
	import logoSvg from '../static/logo.svg'
	import profile from '../static/profile.png'
</script>

<header class="header">
	<div class="header__logo--wrapper">
		<object data={logoSvg} type="image/svg+xml" aria-label="Nutrisync logo" class="header__logo">
			<img src={logo} alt="Nutrisync logo" class="header__logo" />
		</object>
	</div>

	<nav class="header__nav">
		<a href="/" class="nav__element nav__element--current">Home</a>
		<a href="/diet" class="nav__element">Diet</a>
		<a href="/fridge" class="nav__element">Fridge</a>
		<a href="/contact" class="nav__element">Contact</a>
		<a href="/profile" class="nav__element">
			<img src={profile} alt="Profile" class="nav__element--image" />
		</a>
	</nav>
</header>

<style lang="scss">
	@import '../app';
	.header {
		@include box(100%, 7.2rem);

		display: flex;

		box-shadow: 0.5rem 0.2rem 0.5rem 0.5rem rgba(160, 160, 160, 0.75);

		position: sticky;
		top: 0;
		left: 0;

		&__nav {
			@include box(65%, 100%);
			display: flex;
			align-items: center;
			justify-content: flex-end;
			padding-right: 25rem;
		}

		&__logo--wrapper {
			@include box(35%, 100%);
			display: flex;
			align-items: center;
			justify-content: center;
		}
	}

	.nav__element {
		font-size: 1.6rem;
		font-weight: bold;
		color: var(--dark);
		text-decoration: none;
		margin: 0 2rem;

		&--current {
			color: var(--primary-brand);
		}

		&--image {
			padding-top: 0.3rem;
		}
	}
</style>
