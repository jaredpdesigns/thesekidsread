<template>
  <article
    :class="[
      $options.name,
      row
        ? $options.name + '--row border__bottom color__border--base--light'
        : 'type__align--center',
    ]"
  >
    <nuxt-link :to="'/books/' + book.slug" class="padding__all--m">
      <figure>
        <span :class="$options.name + '__img'">
          <picture>
            <source
              sizes="(min-width: 47rem) 480px, (min-width: 29rem) 320px, 240px"
              :srcset="
                (book.img + '._SL320_.jpg 320w', book.img + '._SL480_.jpg 480w')
              "
            />
            <img
              :alt="book.title + ' cover'"
              class="border__all color__border--base--ghost radius--xs shadow"
              loading="lazy"
              :src="book.img + '._SL240_.jpg'"
            />
          </picture>
        </span>
        <figcaption class="oomph__v--xs padding__top--m">
          <h1 class="color__type--brand type__size--l-m">{{ book.title }}</h1>
          <h2 class="color__type--base--mid type__family--body type__size--m-m">
            {{ "by " + book.author.join(" & ") }}
          </h2>
        </figcaption>
      </figure>
    </nuxt-link>
  </article>
</template>
<script>
export default {
  name: "BookTile",
  props: {
    book: { default: () => {}, type: Object },
    row: { default: false },
  },
};
</script>
<style lang="scss">
.BookTile {
  --size: var(--width__xxs);
  @include breakpoint(xl) {
    --size: var(--width__xs);
  }
  a {
    border-radius: var(--size__s);
    display: block;
    &:focus,
    &:hover {
      img {
        transform: scale(1.0125);
      }
    }
    &:focus-visible {
      background-color: var(--color__brand--light);
    }
  }
  &__img {
    align-items: flex-end;
    display: inline-flex;
    height: var(--size);
    justify-content: center;
    width: var(--size);
    img {
      @include smooth;
      max-height: var(--size);
    }
  }
  h1 {
    &:after,
    &:before {
      opacity: 0.5;
    }
    &:after {
      content: "\200a”";
    }
    &:before {
      content: "“\200a";
    }
  }
  h2 {
    font-weight: normal;
  }
  &--row {
    --size: 4rem;
    @include smooth;
    &:last-child {
      border-bottom: none;
    }
    a {
      &:hover {
        background-color: var(--color__brand--light);
      }
    }
    figure {
      align-items: center;
      display: flex;
    }
    .BookTile__img {
      align-items: center;
      flex-shrink: 0;
    }
    figcaption {
      padding: 0;
      padding-left: var(--size__m);
      text-align: left;
    }
    h1 {
      font-size: var(--typeSize__m);
      line-height: var(--typeLineheight__s);
      &:before {
        margin-left: calc(var(--size__s) * -1);
      }
    }
    h2 {
      font-size: var(--typeSize__s);
      line-height: var(--typeLineheight__s);
    }
  }
}
</style>
