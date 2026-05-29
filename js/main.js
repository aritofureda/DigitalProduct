/* ============================================================
   main.js — DigitalFlow landing page interactions
   ============================================================ */

'use strict';

/* ── Utility: easing function (ease-out cubic) ── */
function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3);
}

/* ── Counter animation ──────────────────────────────────────
   Animates a number from 0 (or startVal) to target.
   Supports suffix strings like "k+", "%", "x".
   ---------------------------------------------------------- */
function animateCounter(el) {
  const raw     = el.dataset.target;   // e.g. "50", "3.2", "99.9"
  const suffix  = el.dataset.suffix || ''; // e.g. "k+", "x", "%"
  const target  = parseFloat(raw);
  const isFloat = raw.includes('.');
  const duration = parseInt(el.dataset.duration || '1800', 10);
  const start   = performance.now();

  function tick(now) {
    const elapsed  = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased    = easeOutCubic(progress);
    const current  = target * eased;

    el.textContent = (isFloat ? current.toFixed(1) : Math.floor(current)) + suffix;

    if (progress < 1) {
      requestAnimationFrame(tick);
    } else {
      el.textContent = (isFloat ? target.toFixed(1) : target) + suffix;
    }
  }

  requestAnimationFrame(tick);
}

/* ── Scroll-triggered fade-up ─────────────────────────────── */
function initFadeUp() {
  const els = document.querySelectorAll('.fade-up');
  if (!els.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  els.forEach((el) => observer.observe(el));
}

/* ── Scroll-triggered counters ────────────────────────────── */
function initCounters() {
  const counters = document.querySelectorAll('[data-target]');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach((el) => observer.observe(el));
}

/* ── Scroll-triggered stat bar fills ─────────────────────── */
function initStatBars() {
  const bars = document.querySelectorAll('.stat-bar');
  if (!bars.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // small delay so counter and bar start together
        setTimeout(() => entry.target.classList.add('filled'), 100);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  bars.forEach((el) => observer.observe(el));
}

/* ── FAQ accordion ────────────────────────────────────────── */
function initFaq() {
  document.querySelectorAll('.faq-item button').forEach((btn) => {
    btn.addEventListener('click', () => {
      const item   = btn.closest('.faq-item');
      const isOpen = item.classList.contains('open');

      // close all
      document.querySelectorAll('.faq-item.open').forEach((i) => i.classList.remove('open'));

      // open clicked if it was closed
      if (!isOpen) item.classList.add('open');
    });
  });
}

/* ── Mobile nav toggle ────────────────────────────────────── */
function initMobileNav() {
  const toggle = document.getElementById('nav-toggle');
  const menu   = document.getElementById('nav-menu');
  if (!toggle || !menu) return;

  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    menu.classList.toggle('hidden');
  });

  // close on link click
  menu.querySelectorAll('a').forEach((a) => {
    a.addEventListener('click', () => {
      menu.classList.add('hidden');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

/* ── Boot ─────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initFadeUp();
  initCounters();
  initStatBars();
  initFaq();
  initMobileNav();
});
