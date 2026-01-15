<script lang="ts">
  import { fade, fly } from "svelte/transition";
  import { clickOutside } from "../utils/click-outside";

  export interface Link {
    label: string;
    href: string;
  }

  interface Props {
    links: Link[];
    ctaLabel?: string;
    ctaHref?: string;
  }

  let {
    links,
    ctaLabel = "Shop Now",
    ctaHref = "/collections/best-sellers",
  }: Props = $props();

  let isOpen = $state(false);
  let drawerEl: HTMLDivElement | undefined = $state();

  $effect(() => {
    if (typeof document === "undefined") {
      return;
    }

    if (isOpen) {
      document.querySelector("body")?.classList.add("overflow-hidden");
      drawerEl?.focus();
    } else {
      document.querySelector("body")?.classList.remove("overflow-hidden");
    }
  });

  function open() {
    isOpen = true;
  }

  function close() {
    isOpen = false;
  }

  function onKeyDown(event: KeyboardEvent) {
    if (event.key === "Escape") {
      close();
    }
  }
</script>

<button
  class="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white text-black transition hover:bg-black hover:text-white"
  type="button"
  aria-label="Open menu"
  onclick={open}
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="currentColor"
    class="h-5 w-5"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
    />
  </svg>
</button>

{#if isOpen}
  <div
    class="relative z-50"
    aria-labelledby="mobile-menu-title"
    role="dialog"
    aria-modal="true"
  ><div
      in:fade={{ duration: 500 }}
      out:fade={{ duration: 500 }}
      class="fixed inset-0 bg-slate-400/50 backdrop-blur-sm transition-opacity"
></div>
    <div class="fixed inset-0 overflow-hidden min-h-screen backdrop-blur-sm">
      <div class="absolute inset-0 overflow-hidden">
        <div
          class="pointer-events-none fixed inset-y-0 left-0 flex max-w-full pr-6 focus:outline-none"
          tabindex="-1"
          use:clickOutside={() => close()}
          bind:this={drawerEl}
          onkeydown={onKeyDown}
          role="button"
        >
          <div
            in:fly={{ duration: 500, x: -500, opacity: 100 }}
            out:fly={{ duration: 500, x: -500, opacity: 100 }}
            class="pointer-events-auto w-screen max-w-lg max-h-screen bg-white"
          >
            <div class="flex flex-col min-h-full max-h-screen bg-white">
              <div class="flex items-start justify-between shadow-sm p-5">
                <h2
                  class="text-2xl flex gap-4 items-center font-bold text-zinc-800"
                  id="mobile-menu-title"
                >
                  Menu
                </h2>
                <div class="ml-3 flex h-7 items-center">
                  <button
                    onclick={() => close()}
                    type="button"
                    class="-m-2 p-2 text-gray-400 hover:text-gray-500"
                  >
                    <span class="sr-only">Close panel</span>
                    <svg
                      class="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              <div class="flex-1 overflow-y-scroll">
                <nav class="px-5 py-6">
                  <div
                    class="flex flex-col gap-4 text-xs font-semibold uppercase tracking-[0.3em]"
                  >
                    {#each links as link}
                      <a
                        class="text-zinc-700 hover:text-zinc-900"
                        href={link.href}
                      >
                        {link.label}
                      </a>
                    {/each}
                    <a class="text-zinc-700 hover:text-zinc-900" href="/search">
                      Search
                    </a>
                  </div>
                </nav>
              </div>

              <div class="">
                <div class="border-t border-zinc-200 py-6 px-4 sm:px-6">
                  <a class="button w-full" href={ctaHref}>{ctaLabel}</a>
                  <p class="mt-4 text-xs text-gray-500">
                    Cabrillo, CA — USA & Canada Shipping
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
{/if}
