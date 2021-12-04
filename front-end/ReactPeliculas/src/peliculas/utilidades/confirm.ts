import Swal from "sweetalert2";
export default function confirm(
    onConfirm: any, title: string = 'Do u wanna delete this registry?',
    textOfConfirmationButton: any = 'Delete'
){
    Swal.fire({
        title: title,
        icon: 'warning',
        confirmButtonText: textOfConfirmationButton,
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33'
    }).then(result => {
        if (result.isConfirmed){
            onConfirm();
        }
    })
}