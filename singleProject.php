<?php

 class SingleProject{
     
     private $title =''; // string
     private $images = array(); //empty array
     private $description =''; // array of strings url
     private $links = array(); //array images of the portfolio
     private $thumb = ''; //the main image of the portfolio
     private $category =''; // string with the category
     
function fakeIt(){
    $this->id = rand(0,999) ; 
    $this->title = 'Title of project '.$this->id;
     
 }
     // can do it like this.
    public function getTitle(){ return $this -> title; }
    public function setTitle($title){ $this-> title = $title; }  
    
    // or like this.
    public function addImage($var1) 
    {
    array_push($this->images,$var1);
    return;
    }
   public function addImage($image)
  {
     $this-> image =$image;
  }
    public function removeImage($item)
  {
     for ($i=0; $i<count($this->images); $i++){
         if($this->images[$i]->)
     }
     
 }
  public function getDescription()
      {
    return $this -> description;
    
  }
 public function setDescription($description)
  {
     $this-> description =$description;
  }
     
    function getLinks()
      {
    return $this -> links;
    
  }
  
   public  function addLinks($links)
  {
     $this-> links =$links;
  }
  
    function removeThumb()
      {
    return $this -> thumb;
    
  }
  
   public  function setThumb($thumb)
  {
     $this-> thumb =$thumb;
  }