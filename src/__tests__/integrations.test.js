import React from 'react';
import { mount } from 'enzyme';
import axios from '../apis/ecommerce';
import moxios from 'moxios';

import Root from '../Root';
import App from '../components/App';
import { Show } from '../components/Show/Show';

beforeEach(() => {
  moxios.install(axios);
});

afterEach(() => {
  moxios.uninstall();
});

it('can fetch and display list of departments', done => {
  moxios.stubRequest('https://backendapi.turing.com/departments', {
    status: 200,
    response: [
      {
        department_id: 1,
        name: 'Regional',
        description:
          'Proud of your country? Wear a T-shirt with a national symbol stamp!'
      },
      {
        department_id: 2,
        name: 'Nature',
        description:
          'Find beautiful T-shirts with animals and flowers in our Nature department!'
      }
    ]
  });

  const wrapped = mount(
    <Root>
      <App />
    </Root>
  );

  moxios.wait(() => {
    wrapped.update();

    expect(wrapped.find('.departments ul li').length).toEqual(2);

    done();
    wrapped.unmount();
  });
});

it('can fetch and display categories', done => {
  moxios.stubRequest('https://backendapi.turing.com/categories', {
    status: 200,
    response: {
      count: 7,
      rows: [
        {
          category_id: 1,
          name: 'French',
          description:
            "The French have always had an eye for beauty. One look at the T-shirts below and you'll see that same appreciation has been applied abundantly to their postage stamps. Below are some of our most beautiful and colorful T-shirts, so browse away! And don't forget to go all the way to the bottom - you don't want to miss any of them!",
          department_id: 1
        },
        {
          category_id: 2,
          name: 'Italian',
          description:
            "The full and resplendent treasure chest of art, literature, music, and science that Italy has given the world is reflected splendidly in its postal stamps. If we could, we would dedicate hundreds of T-shirts to this amazing treasure of beautiful images, but for now we will have to live with what you see here. You don't have to be Italian to love these gorgeous T-shirts, just someone who appreciates the finer things in life!",
          department_id: 1
        }
      ]
    }
  });

  const wrapped = mount(
    <Root>
      <App />
    </Root>
  );

  moxios.wait(() => {
    wrapped.update();

    expect(wrapped.find('.categories ul li').length).toEqual(2);

    done();
    wrapped.unmount();
  });
});

it('can fetch and show a list of products', done => {
  moxios.stubRequest('https://backendapi.turing.com/products?page=1', {
    status: 200,
    response: {
      count: 101,
      rows: [
        {
          product_id: 1,
          name: "Arc d'Triomphe",
          description:
            'This beautiful and iconic T-shirt will no doubt lead you to your own triumph.',
          price: '14.99',
          discounted_price: '0.00',
          thumbnail: 'arc-d-triomphe-thumbnail.gif'
        },
        {
          product_id: 2,
          name: 'Chartres Cathedral',
          description:
            '"The Fur Merchants". Not all the beautiful stained glass in the great cathedrals depicts saints and angels! Lay aside your furs for the summer and wear this beautiful T-shirt!',
          price: '16.95',
          discounted_price: '15.95',
          thumbnail: 'chartres-cathedral-thumbnail.gif'
        }
      ]
    }
  });

  const wrapped = mount(
    <Root>
      <App />
    </Root>
  );

  moxios.wait(() => {
    wrapped.update();

    expect(wrapped.find('.products .item').length).toEqual(2);

    done();
    wrapped.unmount();
  });
});

it('can fetch and show a list of products', done => {
  moxios.stubRequest('https://backendapi.turing.com/products?page=1', {
    status: 200,
    response: {
      count: 101,
      rows: [
        {
          product_id: 1,
          name: "Arc d'Triomphe",
          description:
            'This beautiful and iconic T-shirt will no doubt lead you to your own triumph.',
          price: '14.99',
          discounted_price: '0.00',
          thumbnail: 'arc-d-triomphe-thumbnail.gif'
        },
        {
          product_id: 2,
          name: 'Chartres Cathedral',
          description:
            '"The Fur Merchants". Not all the beautiful stained glass in the great cathedrals depicts saints and angels! Lay aside your furs for the summer and wear this beautiful T-shirt!',
          price: '16.95',
          discounted_price: '15.95',
          thumbnail: 'chartres-cathedral-thumbnail.gif'
        }
      ]
    }
  });

  const wrapped = mount(
    <Root>
      <App />
    </Root>
  );

  moxios.wait(() => {
    wrapped.update();

    wrapped
      .find('.products .item')
      .first()
      .simulate('click');

    wrapped.update();

    console.log(wrapped.debug());

    done();
    wrapped.unmount();
  });
});

// it('can display product details', done => {
//   moxios.stubRequest('https://backendapi.turing.com/products/1', {
//     status: 200,
//     response: {
//       status: 200,
//       response: {
//         product_id: 1,
//         name: "Arc d'Triomphe",
//         description:
//           'This beautiful and iconic T-shirt will no doubt lead you to your own triumph.',
//         price: '14.99',
//         discounted_price: '0.00',
//         image: 'arc-d-triomphe.gif',
//         image_2: 'arc-d-triomphe-2.gif',
//         thumbnail: 'arc-d-triomphe-thumbnail.gif',
//         display: 0
//       }
//     }
//   });

//   const wrapped = mount(
//     <Root>
//       <Show history={{ location: { search: '?item=1' } }} />
//     </Root>
//   );

//   moxios.wait(() => {
//     wrapped.update();

//     console.log(wrapped.debug());

//     done();
//     wrapped.unmount();
//   });
// });

// it('can display product details', done => {
//   moxios.stubRequest('https://backendapi.turing.com/products?page=1', {
//     status: 200,
//     response: {
//       count: 101,
//       rows: [
//         {
//           product_id: 1,
//           name: "Arc d'Triomphe",
//           description:
//             'This beautiful and iconic T-shirt will no doubt lead you to your own triumph.',
//           price: '14.99',
//           discounted_price: '0.00',
//           thumbnail: 'arc-d-triomphe-thumbnail.gif'
//         },
//         {
//           product_id: 2,
//           name: 'Chartres Cathedral',
//           description:
//             '"The Fur Merchants". Not all the beautiful stained glass in the great cathedrals depicts saints and angels! Lay aside your furs for the summer and wear this beautiful T-shirt!',
//           price: '16.95',
//           discounted_price: '15.95',
//           thumbnail: 'chartres-cathedral-thumbnail.gif'
//         }
//       ]
//     }
//   });

//   const wrapped = mount(
//     <Root>
//       <App />
//     </Root>
//   );

//   moxios.wait(() => {
//     wrapped.update();

//     wrapped
//       .find('.products .item')
//       .first()
//       .simulate('click');

//     moxios.wait(() => {
//       let request = moxios.requests.mostRecent();
//       request
//         .respondWith({
//           status: 200,
//           response: {
//             product_id: 1,
//             name: "Arc d'Triomphe",
//             description:
//               'This beautiful and iconic T-shirt will no doubt lead you to your own triumph.',
//             price: '14.99',
//             discounted_price: '0.00',
//             image: 'arc-d-triomphe.gif',
//             image_2: 'arc-d-triomphe-2.gif',
//             thumbnail: 'arc-d-triomphe-thumbnail.gif',
//             display: 0
//           }
//         })
//         .then(() => {
//           console.log(wrapped.debug());
//           // equal(list.rows.length, 2);
//           // equal(list.rows[0].cells[0].innerHTML, 'Fred');
//           // equal(list.rows[1].cells[0].innerHTML, 'Wilma');
//           // done();
//         });
//     });

//     // done();
//     wrapped.unmount();
//   });
// });

// it('can search a product', done => {
//   moxios.stubRequest();
// });
