$(".burger-icon").on("click", () => {
    $(".burger-icon").attr("src", function (index, attr) {
      $(".Menu").css("height", function (index, currentHeight) {
        return currentHeight === "200px" ? "90px" : "200px";
      });
      return attr === "./img-resources/menu.png" ? "./img-resources/reject.png" : "./img-resources/menu.png";
    });
  });


  $(document).ready(function () {
    $(".order1, .order2, .order3, .order4").on("click", function (event) {

     
      // Get the current order number from the clicked element
      const orderNum = $(this).attr("class").match(/\border\d\b/)[0];

      // Check if the click is on the number div
      const isNumberDiv = $(event.target).hasClass("number") || $(event.target).parents(".number").length;

      // Toggle the class between "coffe-list" and "coffe" only if not clicking on the number div
      if (!isNumberDiv) {
        // Check if the element already has the "coffe" class
        const isCoffe = $(this).hasClass("coffe");

        // Reset all elements with "coffe" class to "coffe-list"
        $(".coffe").removeClass("coffe").addClass("coffe-list");

        // Remove the "number" div from all elements with "coffe-list" class
        $(".coffe-list .number").remove();

        // Toggle the "coffe" class for the clicked element
        if (!isCoffe) {
          $(this).toggleClass("coffe-list coffe");

          // Append the "number" div when switching to "coffe" class
          if ($(this).hasClass("coffe")) {
            const coffeeDiv = $("<div class='number'>");
            var coffe;
            if (this.id == "order1") {
              coffe = ["Specialty C'B", "Espresso Blend", "Iced C'V"];
            } else if (this.id == "order2") {
              coffe = ["Gourmet Doughnuts", "Artisanal Macarons", "Decadent Tiramisu"];
            } else if (this.id == "order3") {
              coffe = ["Avocado Toast", "Gourmet Grilled", "Quinoa Salad"];
            } else if (this.id == "order4") {
              coffe = ["Iced M'L", "Fruit-infused", "Iced Chai"];
            }
            var or = 1;

            for (let i = 0; i < 3; i++) {
              var y = or.toString();
              coffeeDiv.append(`
                <div class='x'>
                  <h4 class="product" id="order${y}">${coffe[i]}</h4>
                  <div>
                    <span class='plus' id='add${y}'>+</span>
                    <span class='minus' id='minus${y}'>-</span>
                    <input type='text'id='quantity${y}'value='0'/>
                  </div>
                </div>
              `);
              ++or;
            }
            if (this.id == "order1") {
        $(".x").css("color", "#583257");
      } else if (this.id == "order2") {
        $(".product").css("color", "#C05A56");
      } else if (this.id == "order3") {
        $(".product").css("color", "#FF914D");
      } else if (this.id == "order4") {
        $(".product").css("color", "#F0D069");
      }

            var counter1 = 0;
            var counter2 = 0;
            var counter3 = 0;
            $(this).append(coffeeDiv);

            $("#add1").on("click", () => {
              counter1++;
              $("#quantity1").val(`${counter1}`);
            });

            $("#add2").on("click", () => {
              counter2++;
              $("#quantity2").val(`${counter2}`);
            });

            $("#add3").on("click", () => {
              counter3++;
              $("#quantity3").val(`${counter3}`);
            });

            $("#minus1").on("click", () => {
              if (counter1 > 0) {
                counter1--;
              }
              $("#quantity1").val(`${counter1}`);
            });

            $("#minus2").on("click", () => {
              if (counter2 > 0) {
                counter2--;
              }
              $("#quantity2").val(`${counter2}`);
            });

            $("#minus3").on("click", () => {
              if (counter3 > 0) {
                counter3--;
              }
              $("#quantity3").val(`${counter3}`);
            });
          }
        }
      }
    });
  });