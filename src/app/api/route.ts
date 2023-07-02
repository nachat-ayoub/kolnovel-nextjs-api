import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  try {
    const formData: any = {
      seri: 169285,
      ID: 200524,
    };

    const postData = Object.keys(formData)
      .map(
        (key) =>
          encodeURIComponent(key) + '=' + encodeURIComponent(formData[key])
      )
      .join('&');

    const config = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },

      method: 'POST',
      body: postData,
    };

    const res = await fetch(
      'https://kolnovel.com/wp-content/themes/lightnovel/template-parts/single/list_1.php',
      config
    );

    const data = await res.text();
    console.log(data);

    return NextResponse.json({ data });
  } catch (error) {
    console.log(error);
  }
}
