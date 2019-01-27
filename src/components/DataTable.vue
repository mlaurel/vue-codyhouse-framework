<template>
  <div class="datatable">
    <div class="table">
      <div class="table__inner js-table__inner">
        <table aria-label="Table Example">
          <thead class="table__header js-table__header">
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Description</th>
              <th scope="col">Option</th>
              <th scope="col">Date</th>
              <th scope="col">Action</th>
            </tr>
          </thead>

          <tbody class="table__body js-table__body">
            <tr>
              <td>Olivia</td>
              <td
                style="min-width: var(--table-cell-width-lg);"
              >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, at.</td>
              <td class="table__cell--center-x">
                <svg class="icon icon--md" viewBox="0 0 48 48">
                  <title>Option available</title>
                  <path d="M24,47A23,23,0,1,1,47,24,23.026,23.026,0,0,1,24,47Z" fill="#87c458"></path>
                  <polyline
                    points="12 24 20 32 36 16"
                    fill="none"
                    stroke="#fff"
                    stroke-linecap="square"
                    stroke-miterlimit="10"
                    stroke-width="4"
                  ></polyline>
                </svg>
              </td>
              <td class="table__cell--no-wrap">18 Dec, 2018</td>
              <td>
                <button class="btn btn--subtle">Button</button>
              </td>
            </tr>

            <tr>
              <td>Oliver</td>
              <td>Lorem ipsum dolor sit amet.</td>
              <td class="table__cell--center-x">
                <svg class="icon icon--md" viewBox="0 0 48 48">
                  <title>Option available</title>
                  <path d="M24,47A23,23,0,1,1,47,24,23.026,23.026,0,0,1,24,47Z" fill="#87c458"></path>
                  <polyline
                    points="12 24 20 32 36 16"
                    fill="none"
                    stroke="#fff"
                    stroke-linecap="square"
                    stroke-miterlimit="10"
                    stroke-width="4"
                  ></polyline>
                </svg>
              </td>
              <td>01 Dec, 2018</td>
              <td>
                <button class="btn btn--subtle">Button</button>
              </td>
            </tr>

            <tr>
              <td>Francesca</td>
              <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic possimus quia cum corporis vero ducimus delectus nulla maiores repellat magni?</td>
              <td class="table__cell--center-x">
                <svg class="icon icon--md" viewBox="0 0 48 48">
                  <title>Option not available</title>
                  <path d="M24,47A23,23,0,1,1,47,24,23.026,23.026,0,0,1,24,47Z" fill="#f54250"></path>
                  <line
                    x1="33"
                    y1="15"
                    x2="15"
                    y2="33"
                    fill="none"
                    stroke="#fff"
                    stroke-linecap="square"
                    stroke-miterlimit="10"
                    stroke-width="4"
                  ></line>
                  <line
                    x1="15"
                    y1="15"
                    x2="33"
                    y2="33"
                    fill="none"
                    stroke="#fff"
                    stroke-linecap="square"
                    stroke-miterlimit="10"
                    stroke-width="4"
                  ></line>
                </svg>
              </td>
              <td>25 Nov, 2018</td>
              <td>
                <button class="btn btn--subtle">Button</button>
              </td>
            </tr>

            <tr>
              <td>Joshua</td>
              <td>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam libero recusandae corrupti?</td>
              <td class="table__cell--center-x">
                <svg class="icon icon--md" viewBox="0 0 48 48">
                  <title>Option available</title>
                  <path d="M24,47A23,23,0,1,1,47,24,23.026,23.026,0,0,1,24,47Z" fill="#87c458"></path>
                  <polyline
                    points="12 24 20 32 36 16"
                    fill="none"
                    stroke="#fff"
                    stroke-linecap="square"
                    stroke-miterlimit="10"
                    stroke-width="4"
                  ></polyline>
                </svg>
              </td>
              <td>18 Nov, 2018</td>
              <td>
                <button class="btn btn--subtle">Button</button>
              </td>
            </tr>

            <tr>
              <td>Alethea</td>
              <td>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus debitis nulla voluptas pariatur inventore ad!</td>
              <td class="table__cell--center-x">
                <svg class="icon icon--md" viewBox="0 0 48 48">
                  <title>Option available</title>
                  <path d="M24,47A23,23,0,1,1,47,24,23.026,23.026,0,0,1,24,47Z" fill="#87c458"></path>
                  <polyline
                    points="12 24 20 32 36 16"
                    fill="none"
                    stroke="#fff"
                    stroke-linecap="square"
                    stroke-miterlimit="10"
                    stroke-width="4"
                  ></polyline>
                </svg>
              </td>
              <td>05 Nov, 2018</td>
              <td>
                <button class="btn btn--subtle">Button</button>
              </td>
            </tr>

            <tr>
              <td>Sheree</td>
              <td>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit, saepe vel quaerat voluptatum fugiat at delectus id quasi voluptatibus magni, culpa adipisci ad?</td>
              <td class="table__cell--center-x">
                <svg class="icon icon--md" viewBox="0 0 48 48">
                  <title>Option available</title>
                  <path d="M24,47A23,23,0,1,1,47,24,23.026,23.026,0,0,1,24,47Z" fill="#87c458"></path>
                  <polyline
                    points="12 24 20 32 36 16"
                    fill="none"
                    stroke="#fff"
                    stroke-linecap="square"
                    stroke-miterlimit="10"
                    stroke-width="4"
                  ></polyline>
                </svg>
              </td>
              <td>25 Oct, 2018</td>
              <td>
                <button class="btn btn--subtle">Button</button>
              </td>
            </tr>

            <tr>
              <td>Donny</td>
              <td>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</td>
              <td class="table__cell--center-x">
                <svg class="icon icon--md" viewBox="0 0 48 48">
                  <title>Option available</title>
                  <path d="M24,47A23,23,0,1,1,47,24,23.026,23.026,0,0,1,24,47Z" fill="#87c458"></path>
                  <polyline
                    points="12 24 20 32 36 16"
                    fill="none"
                    stroke="#fff"
                    stroke-linecap="square"
                    stroke-miterlimit="10"
                    stroke-width="4"
                  ></polyline>
                </svg>
              </td>
              <td>25 Oct, 2018</td>
              <td>
                <button class="btn btn--subtle">Button</button>
              </td>
            </tr>

            <tr>
              <td>Tatiana</td>
              <td>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque ex, minus eum voluptatem sequi quos porro officiis laborum?</td>
              <td class="table__cell--center-x">
                <svg class="icon icon--md" viewBox="0 0 48 48">
                  <title>Option available</title>
                  <path d="M24,47A23,23,0,1,1,47,24,23.026,23.026,0,0,1,24,47Z" fill="#87c458"></path>
                  <polyline
                    points="12 24 20 32 36 16"
                    fill="none"
                    stroke="#fff"
                    stroke-linecap="square"
                    stroke-miterlimit="10"
                    stroke-width="4"
                  ></polyline>
                </svg>
              </td>
              <td>01 Nov, 2018</td>
              <td>
                <button class="btn btn--subtle">Button</button>
              </td>
            </tr>

            <tr>
              <td>Efren</td>
              <td>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam libero recusandae corrupti?</td>
              <td class="table__cell--center-x">
                <svg class="icon icon--md" viewBox="0 0 48 48">
                  <title>Option available</title>
                  <path d="M24,47A23,23,0,1,1,47,24,23.026,23.026,0,0,1,24,47Z" fill="#87c458"></path>
                  <polyline
                    points="12 24 20 32 36 16"
                    fill="none"
                    stroke="#fff"
                    stroke-linecap="square"
                    stroke-miterlimit="10"
                    stroke-width="4"
                  ></polyline>
                </svg>
              </td>
              <td>29 Oct, 2018</td>
              <td>
                <button class="btn btn--subtle">Button</button>
              </td>
            </tr>

            <tr>
              <td>Alissa</td>
              <td>Lorem ipsum dolor sit amet consectetur.</td>
              <td class="table__cell--center-x">
                <svg class="icon icon--md" viewBox="0 0 48 48">
                  <title>Option available</title>
                  <path d="M24,47A23,23,0,1,1,47,24,23.026,23.026,0,0,1,24,47Z" fill="#87c458"></path>
                  <polyline
                    points="12 24 20 32 36 16"
                    fill="none"
                    stroke="#fff"
                    stroke-linecap="square"
                    stroke-miterlimit="10"
                    stroke-width="4"
                  ></polyline>
                </svg>
              </td>
              <td>25 Oct, 2018</td>
              <td>
                <button class="btn btn--subtle">Button</button>
              </td>
            </tr>
          </tbody>
        </table>

        <button aria-hidden="true" class="table__scrolling-indicator js-table__scrolling-indicator">
          <svg class="icon" viewBox="0 0 24 24">
            <g
              stroke-linecap="square"
              stroke-linejoin="miter"
              stroke-width="2"
              stroke="currentColor"
            >
              <polyline
                fill="none"
                stroke-miterlimit="10"
                points="8,1 16,12 8,23 "
                stroke-linecap="butt"
              ></polyline>
            </g>
          </svg>
        </button>
        <div aria-hidden="true" class="table__body-shadow js-table__body-shadow"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DataTable"
};
</script>

<style scoped lang="scss">
/* -------------------------------- 

Title: Table
Descr: Data tables used to organize and display information in rows and columns

-------------------------------- */

:root {
  --table-cell-width-xs: 40px;
  --table-cell-width-sm: 80px;
  --table-cell-width-md: 120px;
  --table-cell-width-lg: 360px;
  --table-cell-width-xl: 420px;
}

.table {
  font-size: 0.875em;
  overflow: hidden;
  position: relative;
  border-bottom: 2px solid var(--color-contrast-low);

  table {
    vertical-align: top;
    width: 100%;
  }

  th,
  td {
    // cell style
    padding: var(--space-sm);
    text-align: left;
  }

  th {
    // header cell style
    font-weight: bold;
  }
}

.table__inner {
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  scroll-behavior: smooth;
}

.table__header {
  border-bottom: 2px solid var(--color-contrast-low);
  background-color: var(--color-bg);
}

.table__body {
  tr {
    &:nth-child(odd) {
      background-color: var(--color-contrast-lower);
    }
  }
}

.table {
  th,
  td {
    .icon {
      // prevent icons from shrinking if used within cells
      display: block;
      max-width: initial;
    }
  }
}

.table__scrolling-indicator,
.table__body-shadow {
  display: none; // hide elements that require js
}

.js {
  .table {
    &::after {
      // right gradient - visible when scrolling is enabled
      content: "";
      position: absolute;
      top: 0;
      right: -1px;
      height: 100%;
      width: 36px;
      background: linear-gradient(
        to right,
        var(--color-bg-a20),
        var(--color-bg)
      );
      z-index: 1;
      pointer-events: none;
      display: none;
    }

    &.table--show-scrolling-indicator {
      &::after {
        display: block;
      }

      .table__scrolling-indicator {
        display: flex;
      }
    }

    &.table--scrolling-x-started .table__scrolling-indicator {
      display: none; // hide scrolling indicator when user starts scrolling
    }
  }

  .table__scrolling-indicator {
    // icon - scrolling indicator
    position: absolute;
    width: 40px;
    height: 40px;
    top: calc(50% - 20px);
    right: 6px;
    z-index: 2;
    background-color: var(--color-contrast-higher);
    border-radius: 50%;
    justify-content: center;
    align-items: center;
    animation: hintRight 1s;

    display: none;

    .icon {
      width: 24px;
      height: 24px;
      display: block;
      color: var(--color-bg);
    }
  }

  @supports (--css: variables) {
    .table--sticky-header {
      border-bottom: 0;

      .table__header {
        border-bottom: 0;

        tr {
          display: block;
        }
      }

      .table__body {
        display: block;
        height: 500px;
        max-height: 60vh;
        width: 100%;
        overflow: auto;

        tr {
          background-color: var(--color-bg);

          &:nth-child(even) {
            background-color: var(--color-contrast-lower);
          }
        }
      }

      .table__body-shadow {
        // tbody inner shadow
        display: block;
        position: absolute;
        width: 120%;
        margin-left: -10%;
        left: 0;
        box-shadow: inset 0 1px 3px rgba(#000, 0.2),
          inset 0 -1px 3px rgba(#000, 0.2);
        pointer-events: none;
      }

      &.table--scrolling-x {
        .table__body {
          overflow-x: hidden;
        }

        tr > :last-child {
          padding-right: 1.6rem; // fix issue with right scrollbar
        }
      }

      &.table--js-is-loading {
        opacity: 0; // hide table while js loads
      }
    }
  }
}

@keyframes hintRight {
  0%,
  50%,
  100% {
    transform: translateX(0);
  }

  25%,
  75% {
    transform: translateX(6px);
  }
}

// utility classes
.table {
  .table__cell--no-wrap {
    white-space: nowrap;
  }

  .table__cell--center-x {
    text-align: center;

    > * {
      margin-left: auto;
      margin-right: auto;
    }
  }

  .table__cell--center-y {
    vertical-align: middle;
  }

  .table__cell--left {
    text-align: left;
  }

  .table__cell--right {
    text-align: right;

    > * {
      margin-left: auto;
    }
  }

  .table__cell--top {
    vertical-align: top;
  }

  .table__cell--bottom {
    vertical-align: bottom;
  }

  .table__row--is-hidden {
    height: 0;
    margin: 0;
    visibility: hidden;
    overflow: hidden;

    > * {
      height: 0;
      padding-top: 0;
      padding-bottom: 0;
      line-height: 0;

      * {
        display: none;
      }
    }
  }
}
</style>