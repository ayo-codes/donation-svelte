<script>
  import TitleBar from './TitleBar.svelte';
  import WelcomeNavigator from './WelcomeNavigator.svelte';
</script>

<div class="columns is-vcentered">
  <div class="column is-half">
      <TitleBar title={'Donation Services Inc.'} subTitle={'Sign up or Log in'} />
  </div>
  <div class="column is-half">
      <slot> 
        <WelcomeNavigator /> <!-- makes welcomeNavigator the default for the slot position -->
      </slot>
  </div>
</div>
