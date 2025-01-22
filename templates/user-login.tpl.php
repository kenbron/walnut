<?php
// If user login page is active
if (arg(0) == 'user' && arg(1) == 'login'): ?>
   <div class="forgot-password-link">
      <a href="<?php print url('user/password'); ?>"><?php print t('Forgot your password?'); ?></a>
   </div>
<?php endif; ?>
