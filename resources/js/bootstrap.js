import axios from 'axios';
import { router } from '@inertiajs/react';

window.axios = axios;

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

// Initialize Inertia progress bar
router.on('start', () => {
    // Optional: Add any start logic
});

router.on('finish', () => {
    // Optional: Add any finish logic
});
