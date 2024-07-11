<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Contact;
use File;

class ContactController extends Controller
{
  public function contacts(){
    $contacts = Contact::all();
    return response()->json(
      [
        'contacts' => $contacts,
        'message' => 'Contacts',
        'code' => 200
      ]
    );
  }
  public function getContact($id){
    $contact = Contact::find($id);
    return response()->json($contact);
  }
  public function saveContact(Request $request){
    $contacts = new Contact();
    $contacts->name = $request->name;
    $contacts->email = $request->email;
    $contacts->designation = $request->designation;
    $contacts->contact_no = $request->contact_no;

    if ($request->image != "") {
      $image = $request->file('image');
      $ext = $image->getClientOriginalExtension();
      $imageName = time().'.'.$ext; 
      $image->move(public_path('uploads/contacts'), $imageName);
      $contacts->image = $imageName;
    }
    $contacts->save();
    return response()->json([
        'message' => 'Contact Created Successfully',
        'code' => 200,
        'img'=>$contacts->image,
        'contact' => $contacts,
    ]);
  }
  public function deleteContact($id){
    $contact = Contact::find($id);
    if($contact){
      $contact->delete();
      return response()->json([
        'message' => 'Contact deleted succesfully',
        'code' => 200
      ]);
    }else{
      return response()->json([
        'message' => "Contact with id: $id does not exist",
      ]);
    }
  } 
  public function updateContact($id, Request $request){
    $contact = Contact::where('id', $id)->first();
    $contact->name = $request->name;
    $contact->email = $request->email;
    $contact->designation = $request->designation;
    $contact->contact_no = $request->contact_no;
    if ($request->image != "") {
      //delete old image
      if($contact->image != ""){
        File::delete(public_path('uploads/contacts/'.$contact->image));
      }
      $image = $request->file('image');
      $ext = $image->getClientOriginalExtension();
      $imageName = time().'.'.$ext; 
      $image->move(public_path('uploads/contacts'), $imageName);
      $contact->image = $imageName;
    }

    $contact->save();
    return response()->json([
      'message' => 'Contact Updated Successfully',
      'code' => 200,
      'contact' => $contact,
    ]);
  }
}
