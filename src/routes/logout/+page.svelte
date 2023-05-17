<script>
  import { goto } from "$app/navigation";
  import { donationService } from "../../services/donation-service";

  donationService.logout();
  goto("/");
</script>

<!-- This has no UX. As soon as the page is loaded we call the donationService.logout() and the loads the root page -->

