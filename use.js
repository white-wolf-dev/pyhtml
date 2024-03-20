function processCustomTags() {
            var printTags = document.querySelectorAll('print');

            printTags.forEach(function(tag) {
                console.log(tag.textContent);
            });
        }

        document.addEventListener('DOMContentLoaded', function() {
            processCustomTags();
        });
